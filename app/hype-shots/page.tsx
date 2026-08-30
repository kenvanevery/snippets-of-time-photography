import Link from "next/link";
import Image from "next/image";

export default function HypeShotsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">

        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-amber-300">
          Snippets of Time Photography
        </p>

      <Image
  src="/branding/logo/hype-shots-logo.png"
  alt="Hype Shots - Real Photos. No AI."
  width={1536}
  height={1024}
  className="w-[90%] max-w-[560px] h-auto mx-auto"
/>

        <div className="my-8 h-px w-24 bg-amber-300" />

        <h2 className="max-w-3xl text-2xl font-light leading-relaxed md:text-3xl">
          Your sport. Your intensity. Your moment.
        </h2>

        <p className="mt-6 max-w-3xl text-base leading-7 md:mt-8 md:text-lg md:leading-8 text-gray-300">
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

        <div className="mt-14 w-full max-w-4xl border-t border-white/10 pt-12">
  <h3 className="text-2xl font-light tracking-wide text-white md:text-3xl">
    What is a Hype Shot?
  </h3>

  <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-300 md:text-lg md:leading-8">
    A Hype Shot is not a traditional school sports portrait. We use dramatic
    lighting, bold color, smoke, atmosphere, and creative effects to build an
    image around the athlete&apos;s personality, sport, and intensity.
  </p>

  <div className="mt-12">
    <h3 className="text-2xl font-light tracking-wide text-white md:text-3xl">
      The Experience
    </h3>

    <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-300 md:text-lg md:leading-8">
      Bring the uniform. Bring the gear. Bring the attitude. We handle the
      lighting, posing, atmosphere, effects, and photography.
    </p>
  </div>

  <div className="mt-14 border-t border-white/10 pt-12">
    <h3 className="text-2xl font-light tracking-wide text-white md:text-3xl">
      Ready to Get Hyped?
    </h3>

    <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-300">
      Individual athletes • Siblings • Teammates • Full teams
    </p>

    <Link
      href="/contact"
      className="mt-8 inline-block border border-amber-300 px-8 py-4 text-sm uppercase tracking-[0.2em] text-amber-300 transition hover:bg-amber-300 hover:text-black"
    >
      Contact Us About a Hype Shot
    </Link>
  </div>

  <Link
    href="/"
    className="mt-10 inline-block text-sm uppercase tracking-[0.2em] text-gray-400 transition hover:text-amber-300"
  >
    Back to Home
  </Link>
</div>

      </section>
    </main>
  );
}