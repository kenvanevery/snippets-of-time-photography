import Stripe from "stripe";
import { NextResponse } from "next/server";
import { createClient } from "redis";
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
const redis = createClient({
  url: process.env.REDIS_URL,
});

if (!redis.isOpen) {
  await redis.connect();
}
const finish = session.metadata?.finish;
const size = session.metadata?.size;
const artworkSlug = session.metadata?.artwork_slug;
const shippingDetails =
  session.collected_information?.shipping_details;

const customerPhone = session.customer_details?.phone;
if (!finish || !size || !artworkSlug) {
  console.error("Missing Stripe order metadata.");
  return NextResponse.json({ received: true });
}const orderKey = `stripe-order:${session.id}`;
const alreadyProcessed = await redis.get(orderKey);

if (alreadyProcessed) {
  console.log("Stripe order already processed:", session.id);
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
  shippingDetails,
  customerPhone,
}),
  }
);

const whccData = await whccResponse.json();
await redis.set(orderKey, "processed");

console.log("WHCC response after paid Stripe order:", whccData);
console.log("Stripe checkout completed:", session.id);
}
return NextResponse.json({ received: true });
      }