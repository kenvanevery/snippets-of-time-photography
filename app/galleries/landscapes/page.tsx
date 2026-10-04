const photos = [
  {
    src: "/images/galleries/Landscapes/autumn-along-the-fence.jpg",
    alt: "Autumn colors along a country fence",
    slug: "autumn-along-the-fence",
  },
  {
    src: "/images/galleries/Landscapes/blue-ice-mackinac-straits.jpg",
    alt: "Blue ice along the Straits of Mackinac",
    slug: "blue-ice-mackinac-straits",
  },
  {
    src: "/images/galleries/Landscapes/hay-bales-in-the-field.jpg",
    alt: "Hay bales resting in a country field",
    slug: "hay-bales-in-the-field",
  },
  {
    src: "/images/galleries/Landscapes/michigan-woodland-wetlands.jpg",
    alt: "Michigan woodland wetlands",
    slug: "michigan-woodland-wetlands",
  },
  {
    src: "/images/galleries/Landscapes/autumn-country-road.jpg",
    alt: "Country road surrounded by autumn color",
    slug: "autumn-country-road",
  },
  {
    src: "/images/galleries/Landscapes/open-field-under-stormy-sky.jpg",
    alt: "Open field beneath a dramatic stormy sky",
    slug: "open-field-under-stormy-sky",
  },
  {
    src: "/images/galleries/Landscapes/country-wildflower-garden-wonder.jpg",
    alt: "Country wildflower garden",
    slug: "country-wildflower-garden-wonder",
  },
  {
    src: "/images/galleries/Landscapes/overlooking-charlevoix-county.jpg",
    alt: "Landscape overlooking Charlevoix County",
    slug: "overlooking-charlevoix-county",
  },
  {
    src: "/images/galleries/Landscapes/back-road-in-autumn.jpg",
    alt: "Back road winding through the autumn landscape",
    slug: "back-road-in-autumn",
  },
  {
    src: "/images/galleries/Landscapes/lavender-along-the-fence.jpg",
    alt: "Lavender growing along a country fence",
    slug: "lavender-along-the-fence",
  },
  {
    src: "/images/galleries/Landscapes/storm-over-the-cornfield.jpg",
    alt: "Storm clouds gathering over a cornfield",
    slug: "storm-over-the-cornfield",
  },
  {
    src: "/images/galleries/Landscapes/woodland-waterfall.jpg",
    alt: "Waterfall flowing through a woodland landscape",
    slug: "woodland-waterfall",
  },
  {
    src: "/images/galleries/Landscapes/sheep-in-the-autumn-field.jpg",
    alt: "Sheep standing in an autumn field",
    slug: "sheep-in-the-autumn-field",
  },
];

export default function LandscapesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
            Snippets of Time Photography
          </p>

          <h1 className="mt-6 text-4xl font-light md:text-6xl">
            Landscapes
          </h1>

          <div className="mx-auto my-8 h-px w-24 bg-amber-300" />

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-300">
            Open country, quiet back roads, changing seasons, forests,
            fields, and dramatic skies capture the character of the land
            and the beauty found along the way.
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