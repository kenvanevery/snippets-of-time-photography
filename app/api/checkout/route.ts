import Stripe from "stripe";
import { NextResponse } from "next/server";
import { artworks } from "@/app/data/artworks";
import { getPrintProduct } from "@/app/lib/print-products";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

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
    if (typeof finish !== "string" || typeof size !== "string") {
      return NextResponse.json(
        { error: "Invalid product selection." },
        { status: 400 }
      );
    }
    const product = getPrintProduct(finish, size);
    if (!product) {
      return NextResponse.json(
        { error: "This size and finish are unavailable." },
        { status: 400 }
      );
    }
const artworkTitle = artwork.title;
    const price = product.retailPrice;

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
