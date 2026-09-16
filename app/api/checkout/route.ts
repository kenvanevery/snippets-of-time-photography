import Stripe from "stripe";
import { NextResponse } from "next/server";
import { artworks } from "@/app/data/artworks";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const prices: Record<string, Record<string, number>> = {
  "Fine Art Print": {
    "12×18": 79,
    "16×24": 179,
    "20×30": 229,
    "24×36": 349,
    "30×45": 449,
    "40×60": 749,
  },

  "Gallery Wrap Canvas": {
    "12×18": 199,
    "16×24": 279,
    "20×30": 349,
    "24×36": 499,
    "40×60": 1199,
  },

  "Metal Print": {
    "12×18": 179,
    "16×24": 279,
    "20×30": 399,
    "24×36": 549,
    "30×45": 799,
    "40×60": 1499,
  },

  "Acrylic Print": {
    "12×18": 299,
    "16×24": 399,
    "20×30": 549,
    "24×36": 799,
    "40×60": 1999,
  },
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const finish = body.finish;
const size = body.size;

const artworkSlug = body.artworkSlug;
const artwork = Object.entries(artworks).find(
  ([slug]) => slug === artworkSlug
)?.[1];

if (!artwork || !artwork.printMaster) {
  return NextResponse.json(
    { error: "This photograph is not available for ordering." },
    { status: 400 }
  );
}
    if (
      typeof finish !== "string" ||
      typeof size !== "string" ||
      !prices[finish] ||
      prices[finish][size] === undefined
    ) {
      return NextResponse.json(
        { error: "Invalid product selection." },
        { status: 400 }
      );
    }
if (finish !== "Fine Art Print" || size !== "12×18") {
  return NextResponse.json(
    { error: "This size and finish are temporarily unavailable." },
    { status: 400 }
  );
}
const artworkTitle = artwork.title;
    const price = prices[finish][size];

    const origin = new URL(request.url).origin;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: price * 100,

            product_data: {
              name: artworkTitle,
              description: `${finish} • ${size}`,
            },
          },
        },
      ],

      shipping_address_collection: {
        allowed_countries: ["US"],
      },

      phone_number_collection: {
        enabled: true,
      },

      metadata: {
  artwork: artworkTitle,
  artwork_slug: artworkSlug,
  finish,
  size,
},

    success_url: `${origin}/art/${artworkSlug}?checkout=success&session_id={CHECKOUT_SESSION_ID}`,

      cancel_url: `${origin}/art/${artworkSlug}?checkout=cancelled`,
   });

console.log("Checkout metadata:", {
  artwork_slug: "crisp-point-lighthouse",
  finish,
  size,
});
    console.error("Stripe checkout error:",);
return NextResponse.json({
  url: session.url,
});
} catch (error) {
  console.error("Stripe checkout error:", error);

  return NextResponse.json(
    { error: "Unable to create checkout session." },
    { status: 500 }
  );
}
}