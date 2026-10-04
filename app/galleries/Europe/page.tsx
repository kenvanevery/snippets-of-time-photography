import Link from "next/link";

const photos = [
  {
    src: "/images/galleries/Europe/eiffel-tower-at-dawn.jpg",
    alt: "Eiffel Tower at dawn in Paris",
    slug: "eiffel-tower-at-dawn",
  },
  {
    src: "/images/galleries/Europe/monets-garden-archway.jpg",
    alt: "Archway in Monet's Garden at Giverny",
    slug: "monets-garden-archway",
  },
  {
    src: "/images/galleries/Europe/neuschwanstein-castle.jpg",
    alt: "Neuschwanstein Castle in Bavaria",
    slug: "neuschwanstein-castle",
  },
  {
    src: "/images/galleries/Europe/alexandre-iii-bridge-lampposts.jpg",
    alt: "Ornate lampposts on the Alexandre III Bridge in Paris",
    slug: "alexandre-iii-bridge-lampposts",
  },
  {
    src: "/images/galleries/Europe/venus-de-milo-full-body.jpg",
    alt: "Venus de Milo at the Louvre",
    slug: "venus-de-milo-full-body",
  },
  {
    src: "/images/galleries/Europe/chateau-gaillard-normandy.jpg",
    alt: "Chateau Gaillard overlooking Normandy",
    slug: "chateau-gaillard-normandy",
  },
  {
    src: "/images/galleries/Europe/monets-water-lily-pond.jpg",
    alt: "Water lily pond at Monet's Garden",
    slug: "monets-water-lily-pond",
  },
  {
    src: "/images/galleries/Europe/Winged-Victory.jpg",
    alt: "Winged Victory of Samothrace at the Louvre",
    slug: "winged-victory",
  },
  {
    src: "/images/galleries/Europe/les-andelys-france.jpg",
    alt: "Les Andelys in Normandy, France",
    slug: "les-andelys-france",
  },
  {
    src: "/images/galleries/Europe/neuschwanstein-through-the-trees.jpg",
    alt: "Neuschwanstein Castle seen through the trees",
    slug: "neuschwanstein-through-the-trees",
  },
  {
    src: "/images/galleries/Europe/louvre-geometry.jpg",
    alt: "Architectural geometry at the Louvre in Paris",
    slug: "louvre-geometry",
  },
  {
    src: "/images/galleries/Europe/monets-garden-in-bloom.jpg",
    alt: "Monet's Garden in bloom at Giverny",
    slug: "monets-garden-in-bloom",
  },
  {
    src: "/images/galleries/Europe/quiet-street-in-paris.jpg",
    alt: "Quiet street in Paris",
    slug: "quiet-street-in-paris",
  },
  {
    src: "/images/galleries/Europe/neuschwanstein-in-the-alps.jpg",
    alt: "Neuschwanstein Castle in the Bavarian Alps",
    slug: "neuschwanstein-in-the-alps",
  },
  {
    src: "/images/galleries/Europe/notre-dame-from-the-seine.jpg",
    alt: "Notre Dame viewed from the Seine",
    slug: "notre-dame-from-the-seine",
  },
  {
    src: "/images/galleries/Europe/venus-de-milo-portrait.jpg",
    alt: "Portrait study of the Venus de Milo",
    slug: "venus-de-milo-portrait",
  },
  {
    src: "/images/galleries/Europe/seine-at-les-andelys.jpg",
    alt: "The Seine at Les Andelys in Normandy",
    slug: "seine-at-les-andelys",
  },
  {
    src: "/images/galleries/Europe/bir-hakeim-vanishing-point.jpg",
    alt: "Vanishing point beneath the Bir-Hakeim Bridge in Paris",
    slug: "bir-hakeim-vanishing-point",
  },
  {
    src: "/images/galleries/Europe/Alexander_Bridge_2.jpg",
    alt: "Alexandre III Bridge in Paris",
    slug: "alexander-bridge-2",
  },
];

export default function EuropeGallery() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-light tracking-wide md:text-5xl">
            Europe
          </h1>

          <div className="mx-auto mt-5 h-px w-24 bg-yellow-500" />

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
            From the streets of Paris and the gardens of Giverny to the castles
            of Bavaria and landscapes of Normandy, a collection of moments
            gathered across Europe.
          </p>
        </div>

        <div className="columns-1 gap-7 md:columns-2">
          {photos.map((photo) => (
            <Link
              key={photo.slug}
              href={`/art/${photo.slug}`}
              className="mb-7 block break-inside-avoid overflow-hidden"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-auto w-full transition duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}