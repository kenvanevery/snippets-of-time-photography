const photos = [
  {
    src: "/images/galleries/Waterscapes/charlevoix-beach.jpg",
    alt: "Lake Michigan shoreline at Charlevoix",
    slug: "charlevoix-beach",
  },
  {
src: "/images/galleries/Waterscapes/crooked-lake-sunrise.jpg",
    alt: "Sunrise over Crooked Lake in Northern Michigan",
    slug: "crooked-lake-sunrise",
  },
  {
    src: "/images/galleries/Waterscapes/frozen-lake-michigan.jpg",
    alt: "Frozen Lake Michigan shoreline in winter",
    slug: "frozen-lake-michigan",
  },
  {
    src: "/images/galleries/Waterscapes/grand-haven-lighthouse.jpg",
    alt: "Grand Haven lighthouse on Lake Michigan",
    slug: "grand-haven-lighthouse",
  },
  {
    src: "/images/galleries/Waterscapes/lake-michigan-at-sunset.jpg",
    alt: "Lake Michigan at sunset",
    slug: "lake-michigan-at-sunset",
  },
  {
    src: "/images/galleries/Waterscapes/moon-over-little-traverse-bay.jpg",
    alt: "Moon over Little Traverse Bay",
    slug: "moon-over-little-traverse-bay",
  },
  {
    src: "/images/galleries/Waterscapes/petoskey-breakwall.jpg",
    alt: "Petoskey breakwall along Little Traverse Bay",
    slug: "petoskey-breakwall",
  },
  {
    src: "/images/galleries/Waterscapes/sleeping-bear-dunes.jpg",
    alt: "Sleeping Bear Dunes overlooking Lake Michigan",
    slug: "sleeping-bear-dunes",
  },
  {
src: "/images/galleries/Waterscapes/sturgeon-bay.jpg",
    alt: "Scenic waterscape at Sturgeon Bay",
    slug: "sturgeon-bay",
  },
  {
    src: "/images/galleries/Waterscapes/Wallon-Lake.jpg",
    alt: "Walloon Lake in Northern Michigan",
    slug: "walloon-lake",
  },
];

export default function WaterscapesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
            Snippets of Time Photography
          </p>

          <h1 className="mt-6 text-4xl font-light md:text-6xl">
            Waterscapes
          </h1>

          <div className="mx-auto my-8 h-px w-24 bg-amber-300" />

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-300">
            From quiet inland lakes to the vast shoreline of Lake Michigan,
            these photographs capture the changing character, color, and mood
            of water across the Great Lakes region.
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