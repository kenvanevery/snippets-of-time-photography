import Link from "next/link";

export default function HypeShotsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">

        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-amber-300">
          Snippets of Time Photography
        </p>

        <h1 className="text-5xl font-semibold uppercase tracking-[0.12em] md:text-7xl">
          Hype Shots
        </h1>

        <div className="my-8 h-px w-24 bg-amber-300" />

        <h2 className="max-w-3xl text-2xl font-light leading-relaxed md:text-3xl">
          Your sport. Your intensity. Your moment.
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
  Hype Shots turn ordinary sports portraits into dramatic, high-impact images
  built around the athlete. Using professional studio lighting, bold color,
  atmosphere, smoke, and creative effects, we create images that capture the
  intensity, confidence, and personality behind the uniform.
</p>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          Football. Basketball. Hockey. Baseball. Wrestling. Cheer. Dance.
          Whatever you compete in, we create a portrait that captures the
          confidence, attitude, and energy you bring to it.
        </p>

        <p className="mt-8 text-xl font-medium uppercase tracking-[0.18em] text-amber-300">
          Real athletes. Real photography. No AI.
        </p>

        <p className="mt-10 max-w-2xl text-base leading-7 text-gray-400">
          Individual athlete sessions, team sessions, and custom concepts will
          be available throughout Northern Michigan. Sample Hype Shots and
          session information are coming soon.
        </p>

        <Link
          href="/"
          className="mt-12 border border-amber-300 px-8 py-4 text-sm uppercase tracking-[0.25em] text-amber-300 transition hover:bg-amber-300 hover:text-black"
        >
          Back to Home
        </Link>

      </section>
    </main>
  );
}