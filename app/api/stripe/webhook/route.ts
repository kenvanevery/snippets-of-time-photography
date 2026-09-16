import Stripe from "stripe";
import { NextResponse } from "next/server";
export const runtime = "nodejs";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);


export async function POST(request: Request) {
  try {
      const body = await request.text();
      const signature = request.headers.get("stripe-signature");
      if (!signature) {
  return NextResponse.json(
    { error: "Missing Stripe signature." },
    { status: 400 }
  );
}
let event: Stripe.Event | null = null;

const webhookSecrets = [
  process.env.STRIPE_WEBHOOK_SECRET,
  process.env.STRIPE_WEBHOOK_SECRET_SANDBOX,
].filter((secret): secret is string => Boolean(secret));

for (const secret of webhookSecrets) {
  try {
    event = stripe.webhooks.constructEvent(body, signature, secret);
    break;
  } catch {
    // Try the next webhook signing secret
  }
}

if (!event) {
  return NextResponse.json(
    { error: "Invalid Stripe webhook signature." },
    { status: 400 }
  );
}
if (event.type === "checkout.session.completed") {
  const session = event.data.object as Stripe.Checkout.Session;
  if (session.payment_status !== "paid") {
  return NextResponse.json({ received: true });
}
// Manually fulfilled through WHCC: order #22592245.
// Acknowledge retries without submitting another print order.
const paymentIntentId =
  typeof session.payment_intent === "string"
    ? session.payment_intent
    : session.payment_intent?.id;

if (
  session.livemode &&
  paymentIntentId === "pi_3UFbUDJXgIMKkYrI1KPiYrXK"
) {
  console.log("Manually fulfilled: WHCC order #22592245", session.id);
  return NextResponse.json({ received: true });
}
const whccResponse = await fetch(
  `${new URL(request.url).origin}/api/whcc/price`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ checkoutSessionId: session.id }),
  }
);

const whccData = await whccResponse.json();
if (
  !whccResponse.ok ||
  whccData.success !== true ||
  (session.livemode ? whccData.submittedForProduction !== true : whccData.submittedToSandbox !== true)
) {
  console.error("WHCC fulfillment failed:", whccData);
  return NextResponse.json(
    { error: "WHCC fulfillment failed." },
    { status: 500 }
  );
}

console.log("WHCC response after paid Stripe order:", whccData);
console.log("Stripe checkout completed:", session.id);
}
return NextResponse.json({ received: true });
        } catch {
    console.error("Stripe fulfillment handler failed.");
    return NextResponse.json({ error: "Fulfillment requires attention." }, { status: 500 });
  }
}
