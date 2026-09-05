import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, interest, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Snippets of Time Photography <onboarding@resend.dev>",
      to: ["contact@snippetsoftimephotography.com"],
      replyTo: email,
      subject: `${interest} inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Interest: ${interest}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Contact email error:", error);

      return NextResponse.json(
        { error: "Unable to send message." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Unable to send message." },
      { status: 500 }
    );
  }
}