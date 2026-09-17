import { NextResponse } from "next/server";
import { list, issueSignedToken, presignUrl } from "@vercel/blob";
import { artworks } from "@/app/data/artworks";
import { createHash } from "node:crypto";
import Stripe from "stripe";
import { createClient } from "redis";
import { getPrintProduct, normalizePrintSize } from "@/app/lib/print-products";
export const runtime = "nodejs";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const WHCC_BASE_URL =
  process.env.WHCC_BASE_URL || "https://sandbox.apps.whcc.com";

export async function POST(request: Request) {
  let redis: ReturnType<typeof createClient> | undefined;
  let reservationKey: string | undefined;
  let confirmationForReview: string | undefined;
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

const finish = paidSession.metadata?.finish;
const size = paidSession.metadata?.size;
const artworkSlug = paidSession.metadata?.artwork_slug;
if (!finish || !size || !artworkSlug) {
  return NextResponse.json(
    { error: "Checkout is missing fulfillment details." },
    { status: 400 }
  );
}
const product = getPrintProduct(finish, size);
if (!product) {
  return NextResponse.json(
    { error: "Unsupported print selection." },
    { status: 400 }
  );
}

if (
  paidSession.mode !== "payment" ||
  paidSession.status !== "complete" ||
  paidSession.payment_status !== "paid" ||
  paidSession.currency !== "usd" ||
  paidSession.amount_total !== product.retailPrice * 100
) {
  return NextResponse.json(
    { error: "A completed payment for the selected product is required." },
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
// Honor existing orders before doing any new fulfillment work.
if (!process.env.REDIS_URL) {
  throw new Error("Redis configuration is required.");
}
redis = createClient({
  url: process.env.REDIS_URL,
  socket: { connectTimeout: 5000, reconnectStrategy: false },
  disableOfflineQueue: true,
});
redis.on("error", () => console.error("Fulfillment Redis connection error."));
await redis.connect();
const orderKey = `stripe-order:${checkoutSessionId}`;
const fulfillmentKey = `whcc-fulfillment:${checkoutSessionId}`;
const prior = await redis.get(fulfillmentKey);
if (prior) {
  const record = JSON.parse(prior);
  if (record.state === "submitted" && record.result) {
    return NextResponse.json(record.result);
  }
  return NextResponse.json({
    success: false,
    error: "Fulfillment is reserved. Review the existing WHCC order before retrying.",
    confirmationID: record.confirmationID ?? null,
  }, { status: 409 });
}
if (await redis.get(orderKey)) {
  return NextResponse.json({
    success: true, alreadyProcessed: true,
    submittedForProduction: paidSession.livemode,
    submittedToSandbox: !paidSession.livemode,
  });
}
// Use the shipping details stored by Stripe.
body.shippingDetails =
  paidSession.collected_information?.shipping_details;
body.customerPhone = paidSession.customer_details?.phone;
const shippingDetails = body.shippingDetails;
const customerPhone = body.customerPhone;
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
  `WHCC TOKEN ERROR ${tokenResponse.status}`
);

  return NextResponse.json(
    {
      success: false,
      error: "WHCC authentication failed.",
      status: tokenResponse.status,

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

const orderRequest = {
  EntryId: `SOT-${createHash("sha256").update(checkoutSessionId).digest("hex").slice(0, 24)}`,

  Orders: [
  {
    SequenceNumber: 1,
    Instructions: null,
    Reference: `SOT-${createHash("sha256").update(checkoutSessionId).digest("hex").slice(0, 24)}`,

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
              ProductUID: product.productUID,
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

              ItemAttributes: product.itemAttributeUIDs.map((AttributeUID) => ({
                AttributeUID,
              })),
            },
          ],
        },
      ],
    };





  
    // No expiry: an ambiguous remote result must never silently unlock an order.
    const reservation = {
      state: "importing", checkoutSessionId,
      entryId: orderRequest.EntryId, startedAt: new Date().toISOString(),
    };
    const claimed = await redis.set(fulfillmentKey, JSON.stringify(reservation), { NX: true });
    if (claimed !== "OK") {
      return NextResponse.json({ success: false, error: "Fulfillment already reserved." }, { status: 409 });
    }
    reservationKey = fulfillmentKey;

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
    `WHCC ORDERIMPORT ERROR ${importResponse.status}`
  );

  return NextResponse.json(
    {
      success: false,
      error: "WHCC OrderImport failed.",
      status: importResponse.status,

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
confirmationForReview = confirmationID;
await redis.set(fulfillmentKey, JSON.stringify({
  ...reservation, state: "imported", confirmationID,
}));
if (process.env.WHCC_IMPORT_ONLY_TEST === "true") {
  return NextResponse.json({
    success: true,
    testMode: "import-only",
    confirmationID,
    whccResponse: importData,
  });
}
await redis.set(fulfillmentKey, JSON.stringify({
  ...reservation, state: "submitting", confirmationID,
}));
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

    },
    { status: 500 }
  );
}
const submitData = JSON.parse(submitText);
if (submitData.ConfirmedOrders !== 1 || submitData.ConfirmationID !== confirmationID) {
  throw new Error("WHCC submission needs reconciliation.");
}
    const result = {
      success: true,

      message:
        paidSession.livemode ? "WHCC production order submitted successfully." : "WHCC sandbox order submitted successfully.",

      product: {
  photograph: artwork.title,
  finish,
  size: normalizePrintSize(size),
  retailPrice: product.retailPrice,
},

      whccPricing: {
        subTotal: order?.SubTotal ?? null,
        tax: order?.Tax ?? null,
        total: order?.Total ?? null,
        products: order?.Products ?? [],
      },

      confirmationID: importData?.ConfirmationID ?? null,

      submittedForProduction: paidSession.livemode,
      submittedToSandbox: !paidSession.livemode,
    };
    await redis.set(fulfillmentKey, JSON.stringify({
      ...reservation, state: "submitted", confirmationID, result,
    }));
    return NextResponse.json(result);
  } catch (error) {
    console.error("WHCC fulfillment requires attention.", { reservationKey, confirmationID: confirmationForReview });

    return NextResponse.json(
      {
        success: false,
        error: "Unexpected WHCC OrderImport error.",
        requiresReview: Boolean(reservationKey),
        confirmationID: confirmationForReview ?? null,
      },
      { status: 500 }
    );
  } finally {
    if (redis?.isOpen) {
      try { await redis.quit(); } catch { /* Reservation remains for review. */ }
    }
  }
}
