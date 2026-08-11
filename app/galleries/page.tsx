const galleries = [
  {
    title: "Northern Michigan",
    href: "/galleries/northern-michigan",
    description:
      "The Great Lakes, lighthouses, forests, vineyards, seasons, and landscapes of Northern Michigan.",
  },
  {
    title: "Waterscapes",
    description:
      "Great Lakes shorelines, quiet inland waters, reflections, storms, harbors, and open water.",
  },
  {
    title: "Landscapes",
    description:
      "Open country, forests, fields, changing skies, and the natural beauty found along the way.",
  },
  {
    title: "Sunrise & Sunset",
    description:
      "The fleeting colors and changing light that mark the beginning and end of the day.",
  },
  {
    title: "Appalachia",
    description:
      "Mountain landscapes, rural communities, winding roads, and the character of Appalachia.",
  },
  {
    title: "Europe",
    description:
      "Architecture, landscapes, villages, streets, and moments discovered while traveling Europe.",
  },
  {
    title: "Wildlife & Nature",
    description:
      "Wildlife, flowers, forests, and the smaller details found throughout the natural world.",
  },
  {
    title: "Black & White",
    description:
      "Monochrome photographs focused on light, texture, shape, contrast, and mood.",
  },
  {
    title: "Abandoned & Forgotten",
    description:
      "Weathered structures, forgotten places, and remnants that still have stories to tell.",
  },
];

export default function GalleriesPage() {
  return (
    <main className="min-h-screen bg-[#050814] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm tracking-[0.35em] text-[#d4af63]">
            SNIPPETS OF TIME PHOTOGRAPHY
          </p>

          <h1 className="text-4xl font-light tracking-[0.18em] md:text-5xl">
            GALLERIES
          </h1>

          <p className="mt-7 text-lg leading-8 text-gray-300">
            A collection of fine art photography from Michigan and beyond,
            capturing landscapes, water, changing seasons, quiet places, and
            moments worth remembering.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleries.map((gallery) => (
            <div
              key={gallery.title}
              className="group border border-white/15 bg-white/[0.03] p-8 transition duration-300 hover:border-[#d4af63]/70 hover:bg-white/[0.06]"
            >
              <h2 className="text-xl font-light tracking-[0.12em] text-[#d4af63]">
                {gallery.title}
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
                {gallery.description}
              </p>

              <a
  href={gallery.href}
  className="mt-7 inline-block text-sm tracking-[0.2em] text-white transition hover:text-[#d6b46a]"
>
  VIEW COLLECTION →
</a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}