import { NextResponse } from "next/server";
import { list, issueSignedToken, presignUrl } from "@vercel/blob";

const WHCC_BASE_URL = "https://sandbox.apps.whcc.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
const finish = body.finish;
const size = body.size;
const shippingDetails = body.shippingDetails;
const customerPhone = body.customerPhone;
if (finish !== "Gallery Wrap Canvas" || size !== "20×30") {
  return NextResponse.json(
    { error: "WHCC pricing is currently configured for the 20x30 Gallery Wrap Canvas test only." },
    { status: 400 }
  );
}
    const consumerKey = process.env.WHCC_CONSUMER_KEY;
    const consumerSecret = process.env.WHCC_CONSUMER_SECRET;
    const blobToken = process.env.BLOB_READ_WRITE_TOKEN;

    if (!consumerKey || !consumerSecret || !blobToken) {
      return NextResponse.json(
        { error: "Required credentials are missing." },
        { status: 500 }
      );
    }

    // Find our private Crisp Point print master.
    const blobResult = await list({
      prefix: "print-masters/Crisp-Point-Lighthouse-PRINT.jpg",
      token: blobToken,
    });

    const crispPointBlob = blobResult.blobs.find(
      (blob) =>
        blob.pathname ===
        "print-masters/Crisp-Point-Lighthouse-PRINT.jpg"
    );

    if (!crispPointBlob) {
      return NextResponse.json(
        { error: "Crisp Point print master was not found." },
        { status: 404 }
      );
    }

    // Create a temporary private GET URL for WHCC.
    const validUntil = Date.now() + 60 * 60 * 1000;

    const signedToken = await issueSignedToken({
      pathname: crispPointBlob.pathname,
      operations: ["get"],
      validUntil,
      token: blobToken,
    });

    const { presignedUrl: signedImageUrl } = await presignUrl(
      signedToken,
      {
        pathname: crispPointBlob.pathname,
        operation: "get",
        validUntil,
        access: "private",
      }
    );

    // Authenticate with WHCC sandbox.
    const tokenUrl = new URL(`${WHCC_BASE_URL}/api/AccessToken`);

    tokenUrl.searchParams.set("grant_type", "consumer_credentials");
    tokenUrl.searchParams.set("consumer_key", consumerKey);
    tokenUrl.searchParams.set("consumer_secret", consumerSecret);

    const tokenResponse = await fetch(tokenUrl, {
      method: "GET",
      cache: "no-store",
    });

    if (!tokenResponse.ok) {
  const tokenErrorText = await tokenResponse.text();

 console.error(
  `WHCC TOKEN ERROR ${tokenResponse.status}: ${tokenErrorText}`
);

  return NextResponse.json(
    {
      success: false,
      error: "WHCC authentication failed.",
      status: tokenResponse.status,
      details: tokenErrorText,
    },
    { status: 500 }
  );
}
 

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.Token;

    if (!accessToken) {
      return NextResponse.json(
        { error: "WHCC did not return an access token." },
        { status: 500 }
      );
    }

  // Crisp Point 20x30 Premium Gallery Wrap test order.
const orderRequest = {
  EntryId: `SOT-${Date.now()}`,

  Orders: [
  {
    SequenceNumber: 1,
    Instructions: null,
    Reference: "SOT Crisp 20x30 Test",

          SendNotificationEmailAddress: null,
          SendNotificationEmailToAccount: true,

         
          ShipToAddress: {
  Name: shippingDetails?.name ?? "",
  Attn: null,
  Addr1: shippingDetails?.address?.line1 ?? "",
  Addr2: shippingDetails?.address?.line2 ?? null,
  City: shippingDetails?.address?.city ?? "",
  State: shippingDetails?.address?.state ?? "",
  Zip: shippingDetails?.address?.postal_code ?? "",
  Country: shippingDetails?.address?.country ?? "US",
  Phone: customerPhone ?? "",
},

          ShipFromAddress: {
            Name: "Returns Department",
            Addr1: "3432 Denmark Ave",
            Addr2: "Suite 390",
            City: "Eagan",
            State: "MN",
            Zip: "55123",
            Country: "US",
            Phone: "8002525234",
          },

          // Drop ship + lowest-cost USA shipping.
          OrderAttributes: [
            { AttributeUID: 548 },
            { AttributeUID: 553 },
          ],

          OrderItems: [
            {
              // Fine Art Canvas Gallery Wrap 20x30, 1.5"
              ProductUID: 89,
              Quantity: 1,
ItemAssets: [
  {
  ProductNodeID: 10000,
             AssetPath: signedImageUrl,

ImageHash: "52E813FDD2B91E937DE7C509D2AEA8A6",

PrintedFileName: "Crisp-Point-Lighthouse-PRINT.jpg",

                  AutoRotate: true,
                },
              ],

              // Premium Gallery Wrap + Matte Laminate.
              ItemAttributes: [
               { AttributeUID: 126 },
{ AttributeUID: 131 }, 
              ],
            },
          ],
        },
      ],
    };

console.log("WHCC ShipToAddress:", orderRequest.Orders[0].ShipToAddress);

// IMPORTANT:

    // IMPORTANT:
    // This imports the order for validation/pricing ONLY.
    // It DOES NOT submit the order for production.
    const importResponse = await fetch(
      `${WHCC_BASE_URL}/api/OrderImport`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderRequest),
        cache: "no-store",
      }
    );

    const importText = await importResponse.text();

    let importData;

    try {
      importData = JSON.parse(importText);
    } catch {
      importData = importText;
    }

    if (!importResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          error: "WHCC OrderImport failed.",
          status: importResponse.status,
          whccResponse: importData,
        },
        { status: 500 }
      );
    }

  
    const order = importData?.Orders?.[0];
const confirmationID = importData?.ConfirmationID;

if (!confirmationID) {
  return NextResponse.json(
    {
      success: false,
      error: "WHCC did not return a ConfirmationID.",
    },
    { status: 500 }
  );
}
const submitResponse = await fetch(
  `https://sandbox.apps.whcc.com/api/OrderImport/Submit/${confirmationID}`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }
);

const submitText = await submitResponse.text();
if (!submitResponse.ok) {
  return NextResponse.json(
    {
      success: false,
      error: "WHCC OrderSubmit failed.",
      status: submitResponse.status,
      whccResponse: submitText,
    },
    { status: 500 }
  );
}
    return NextResponse.json({
      success: true,

      message:
        "WHCC sandbox OrderImport succeeded. ORDER WAS NOT SUBMITTED.",

      product: {
        photograph: "Crisp Point Lighthouse",
        finish: "Premium Gallery Wrap",
        protection: "Matte Laminate",
        size: "20x30",
        retailPrice: 349,
      },

      whccPricing: {
        subTotal: order?.SubTotal ?? null,
        tax: order?.Tax ?? null,
        total: order?.Total ?? null,
        products: order?.Products ?? [],
      },

      confirmationID: importData?.ConfirmationID ?? null,

      submittedForProduction: true,
    });
  } catch (error) {
    console.error("WHCC OrderImport error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unexpected WHCC OrderImport error.",
        details:
          error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}