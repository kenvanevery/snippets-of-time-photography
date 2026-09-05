"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Fine Art & Print Purchase");
  const [message, setMessage] = useState("");

 async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      interest,
      message,
    }),
  });

  if (!response.ok) {
    alert("Sorry, your message could not be sent. Please try again.");
    return;
  }

  alert("Thank you. Your message has been sent.");

  setName("");
  setEmail("");
  setInterest("Fine Art & Print Purchase");
  setMessage("");
}

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
              Snippets of Time Photography
            </p>

            <h1 className="mt-6 text-5xl font-light leading-tight md:text-6xl">
              Let&apos;s Connect
            </h1>

            <div className="my-8 h-px w-24 bg-amber-300" />

            <p className="max-w-xl text-lg leading-8 text-gray-300">
              Whether you&apos;re interested in fine art for your home,
              dramatic Hype Shots, or simply have a question about our work,
              we&apos;d love to hear from you.
            </p>

            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                Direct Email
              </p>

              <a
                href="mailto:contact@snippetsoftimephotography.com"
                className="mt-3 inline-block text-lg text-amber-300 transition hover:text-amber-200"
              >
                contact@snippetsoftimephotography.com
              </a>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                Based In
              </p>

              <p className="mt-3 text-gray-300">
                Northern Michigan
              </p>
            </div>

            <p className="mt-10 max-w-md text-sm leading-6 text-gray-500">
              We typically respond within one to two business days.
            </p>
          </div>

          <div className="border border-white/10 bg-white/[0.035] p-6 shadow-2xl md:p-10">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                Send Us A Message
              </p>

              <h2 className="mt-3 text-2xl font-light">
                Tell us what you&apos;re looking for.
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs uppercase tracking-[0.2em] text-gray-400"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full border border-white/15 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-amber-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs uppercase tracking-[0.2em] text-gray-400"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full border border-white/15 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-amber-300"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="mb-2 block text-xs uppercase tracking-[0.2em] text-gray-400"
                >
                  What can we help with?
                </label>

                <select
                  id="interest"
                  value={interest}
                  onChange={(event) => setInterest(event.target.value)}
                  className="w-full border border-white/15 bg-black px-4 py-3 text-white outline-none transition focus:border-amber-300"
                >
                  <option>Fine Art &amp; Print Purchase</option>
                  <option>Hype Shots</option>
                  <option>Portrait Photography</option>
                  <option>General Question</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs uppercase tracking-[0.2em] text-gray-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  required
                  rows={7}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="w-full resize-none border border-white/15 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-amber-300"
                  placeholder="Tell us a little about what you have in mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full border border-amber-300 bg-amber-300 px-6 py-4 text-sm uppercase tracking-[0.25em] text-black transition hover:bg-transparent hover:text-amber-300"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 border-t border-white/10 pt-6 text-center">
              <Link
                href="/"
                className="text-xs uppercase tracking-[0.2em] text-gray-500 transition hover:text-amber-300"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}