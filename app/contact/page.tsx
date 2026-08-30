import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <section className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
          Snippets of Time Photography
        </p>

        <h1 className="mt-6 text-4xl font-light md:text-5xl">
          Contact Us
        </h1>

        <div className="my-8 h-px w-24 bg-amber-300" />

        <p className="max-w-2xl text-base leading-7 text-gray-300 md:text-lg md:leading-8">
          Interested in a Hype Shot session, fine art photography, or another
          photography project? We&apos;d love to hear from you.
        </p>

        <a
  href="mailto:contact@snippetsoftimephotography.com"
  className="mt-10 border border-amber-300 px-8 py-4 text-sm uppercase tracking-[0.2em] text-amber-300 transition hover:bg-amber-300 hover:text-black"
>
  Email Us
</a>

        <Link
          href="/"
          className="mt-10 text-sm uppercase tracking-[0.2em] text-gray-400 transition hover:text-amber-300"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}