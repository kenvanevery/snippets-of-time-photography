import Stripe from "stripe";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("session_id");
  const slug = searchParams.get("slug");

  if (!sessionId || !/^cs_(live|test)_[A-Za-z0-9]+$/.test(sessionId) || !slug || slug.length > 200) {
    return NextResponse.json({ error: "Invalid checkout reference." }, { status: 400 });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (
      session.mode !== "payment" ||
      session.status !== "complete" ||
      session.payment_status !== "paid" ||
      session.metadata?.artwork_slug !== slug ||
      session.currency !== "usd" ||
      typeof session.amount_total !== "number" ||
      !session.metadata?.artwork ||
      !session.metadata.finish ||
      !session.metadata.size
    ) {
      return NextResponse.json({ error: "Checkout has not been verified." }, { status: 400 });
    }

    return NextResponse.json(
      {
        artwork: session.metadata.artwork,
        finish: session.metadata.finish,
        size: session.metadata.size,
        amount: session.amount_total / 100,
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch {
    return NextResponse.json({ error: "Unable to verify checkout." }, { status: 500 });
  }
}
