import { NextResponse } from "next/server";
import { list, issueSignedToken, presignUrl } from "@vercel/blob";
import { artworks } from "@/app/data/artworks";
import { createHash } from "node:crypto";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const WHCC_BASE_URL =
  process.env.WHCC_BASE_URL || "https://sandbox.apps.whcc.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const checkoutSessionId = body.checkoutSessionId;

if (
  typeof checkoutSessionId !== "string" ||
  !/^cs_(live|test)_[A-Za-z0-9]+$/.test(checkoutSessionId)
) {
  return NextResponse.json(
    { error: "Missing or invalid checkout session ID." },
    { status: 400 }
  );
}
const paidSession = await stripe.checkout.sessions.retrieve(
  checkoutSessionId
);

if (
  paidSession.mode !== "payment" ||
  paidSession.status !== "complete" ||
  paidSession.payment_status !== "paid" ||
  paidSession.currency !== "usd" ||
  paidSession.amount_total !== 7900
) {
  return NextResponse.json(
    { error: "A completed $79 USD payment is required." },
    { status: 400 }
  );
}
const whccIsSandbox =
  new URL(WHCC_BASE_URL).hostname === "sandbox.apps.whcc.com";

if (paidSession.livemode === whccIsSandbox) {
  return NextResponse.json(
    { error: "Stripe and WHCC environments do not match." },
    { status: 400 }
  );
}
const paymentIntentId =
  typeof paidSession.payment_intent === "string"
    ? paidSession.payment_intent
    : paidSession.payment_intent?.id;

if (
  paidSession.livemode &&
  paymentIntentId === "pi_3UFbUDJXgIMKkYrI1KPiYrXK"
) {
  return NextResponse.json(
    { error: "Already fulfilled manually: WHCC order #22592245." },
    { status: 409 }
  );
}
// Use the order details stored by Stripe.
body.finish = paidSession.metadata?.finish;
body.size = paidSession.metadata?.size;
body.artworkSlug = paidSession.metadata?.artwork_slug;
body.shippingDetails =
  paidSession.collected_information?.shipping_details;
body.customerPhone = paidSession.customer_details?.phone;
const finish = body.finish;
const size =
  typeof body.size === "string"
    ? body.size.replace(/×/g, "x").replace(/\s+/g, "").toLowerCase()
    : "";
if (finish !== "Fine Art Print" || size !== "12x18") {
  return NextResponse.json(
    { error: "Automatic fulfillment currently supports only 12x18 Fine Art Prints." },
    { status: 400 }
  );
}
const shippingDetails = body.shippingDetails;
const customerPhone = body.customerPhone;
const artworkSlug = body.artworkSlug;
const artwork = Object.entries(artworks).find(
  ([slug]) => slug === artworkSlug
)?.[1];
if (!artwork || !artwork.printMaster) {
  return NextResponse.json(
    { error: "Unknown artwork or missing print master." },
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
      prefix: artwork!.printMaster,
      token: blobToken,
    });

    const crispPointBlob = blobResult.blobs.find(
      (blob) =>
        blob.pathname === artwork!.printMaster
        
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
const imageResponse = await fetch(signedImageUrl, {
  cache: "no-store",
});

if (!imageResponse.ok) {
  return NextResponse.json(
    { error: "Unable to read the selected print master." },
    { status: 500 }
  );
}

const imageBytes = Buffer.from(await imageResponse.arrayBuffer());
const imageHash = createHash("md5")
  .update(imageBytes)
  .digest("hex");
    // Authenticate with WHCC.
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
    Reference: `SOT ${artworkSlug} ${size} ${finish}`,

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
              ProductUID: 431,
              Quantity: 1,
ItemAssets: [
  {
  ProductNodeID: 10000,
             AssetPath: signedImageUrl,

ImageHash: imageHash,

PrintedFileName: artwork!.printMaster.split("/").pop()!,

                  AutoRotate: true,
                },
              ],

              // Premium Gallery Wrap + Matte Laminate.
              ItemAttributes: [
  { AttributeUID: 2061 },
],
            },
          ],
        },
      ],
    };





  
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
  console.error(
    `WHCC ORDERIMPORT ERROR ${importResponse.status}: ${JSON.stringify(importData)}`
  );

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
if (process.env.WHCC_IMPORT_ONLY_TEST === "true") {
  return NextResponse.json({
    success: true,
    testMode: "import-only",
    confirmationID,
    whccResponse: importData,
  });
}
const submitResponse = await fetch(
`${WHCC_BASE_URL}/api/OrderImport/Submit/${confirmationID}`,
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
        "WHCC production order submitted successfully.",

      product: {
  photograph: artwork.title,
  finish,
  paper: "Smooth Matte",
  size,
  retailPrice: 79,
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