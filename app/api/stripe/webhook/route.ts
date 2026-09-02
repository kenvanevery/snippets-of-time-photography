import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
      const body = await request.text();
      const signature = request.headers.get("stripe-signature");
      if (!signature) {
  return NextResponse.json(
    { error: "Missing Stripe signature." },
    { status: 400 }
  );
}
let event: Stripe.Event;
try {
  event = stripe.webhooks.constructEvent(
    body,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET!
  );
} catch (error) {
  return NextResponse.json(
    { error: "Invalid Stripe webhook signature." },
    { status: 400 }
  );
}if (event.type === "checkout.session.completed") {
  const session = event.data.object as Stripe.Checkout.Session;
  if (session.payment_status !== "paid") {
  return NextResponse.json({ received: true });
}
const finish = session.metadata?.finish;
const size = session.metadata?.size;
const artworkSlug = session.metadata?.artwork_slug;
if (!finish || !size || !artworkSlug) {
  console.error("Missing Stripe order metadata.");
  return NextResponse.json({ received: true });
}
const whccResponse = await fetch(
  `${new URL(request.url).origin}/api/whcc/price`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      finish,
      size,
    }),
  }
);

const whccData = await whccResponse.json();

console.log("WHCC response after paid Stripe order:", whccData);
console.log("Stripe checkout completed:", session.id);
}
return NextResponse.json({ received: true });
      }