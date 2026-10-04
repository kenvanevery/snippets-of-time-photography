const photos = [
  {
    src: "/images/galleries/Sunrise-Sunset/crooked-lake-sunrise.jpg",
    alt: "Sunrise over Crooked Lake in Northern Michigan",
    slug: "crooked-lake-sunrise",
  },
  {
    src: "/images/galleries/Sunrise-Sunset/st-joseph-lighthouse-twilight-web.jpg",
    alt: "St. Joseph Lighthouse at twilight",
    slug: "st-joseph-lighthouse-twilight",
  },
  {
    src: "/images/galleries/Sunrise-Sunset/marina-at-dawn-web.jpg",
    alt: "Northern Michigan marina at dawn",
    slug: "marina-at-dawn",
  },
  {
    src: "/images/galleries/Sunrise-Sunset/pink-skies-over-st-joseph-web.jpg",
    alt: "Pink sunset skies over St. Joseph",
    slug: "pink-skies-over-st-joseph",
  },
  {
    src: "/images/galleries/Sunrise-Sunset/sunrise-over-the-lake-sunset-web.jpg",
    alt: "Colorful light over a Michigan lake",
    slug: "sunrise-over-the-lake-sunset",
  },
  {
    src: "/images/galleries/Sunrise-Sunset/golden-hour-lighthouse-web.jpg",
    alt: "Michigan lighthouse during golden hour",
    slug: "golden-hour-lighthouse",
  },
  {
    src: "/images/galleries/Sunrise-Sunset/sunset-over-the-bay-web.jpg",
    alt: "Sunset over a Northern Michigan bay",
    slug: "sunset-over-the-bay",
  },
  {
    src: "/images/galleries/Sunrise-Sunset/lighthouse-after-the-storm-soft-sunset-web.jpg",
    alt: "Lighthouse beneath a soft sunset after the storm",
    slug: "lighthouse-after-the-storm-soft-sunset",
  },
  {
    src: "/images/galleries/Sunrise-Sunset/nine-mile-point-sunset-web.jpg",
    alt: "Sunset at Nine Mile Point",
    slug: "nine-mile-point-sunset",
  },
  {
    src: "/images/galleries/Sunrise-Sunset/michigan-lighthouse-sunset-web.jpg",
    alt: "Michigan lighthouse at sunset",
    slug: "michigan-lighthouse-sunset",
  },
  {
    src: "/images/galleries/Sunrise-Sunset/st-joseph-lighthouse-mellow-sunset-web.jpg",
    alt: "St. Joseph Lighthouse beneath a mellow sunset",
    slug: "st-joseph-lighthouse-mellow-sunset",
  },
];

export default function SunriseSunsetPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
            Snippets of Time Photography
          </p>

          <h1 className="mt-6 text-4xl font-light md:text-6xl">
            Sunrise &amp; Sunset
          </h1>

          <div className="mx-auto my-8 h-px w-24 bg-amber-300" />

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-300">
            Fleeting moments of color and light, from the first glow of dawn
            to the final light fading across Michigan&apos;s lakes and
            shorelines.
          </p>
        </div>

        <div className="mt-16 columns-1 gap-8 md:columns-2">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="mb-8 break-inside-avoid overflow-hidden bg-neutral-950"
            >
              <a href={`/art/${photo.slug}`}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-auto w-full object-cover"
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}