const photos = [
  {
    src: "/images/galleries/northern-michigan/_DSF0667.jpg",
    alt: "Northern Michigan marina at sunset",
  },
  {
    src: "/images/galleries/northern-michigan/_KEN6958.jpeg",
    alt: "Northern Michigan harbor at sunset",
  },
  {
    src: "/images/galleries/northern-michigan/31889374035_046c1a4bb1_o.jpg",
    alt: "Moonlight reflecting across Northern Michigan water",
  },
  {
    src: "/images/galleries/northern-michigan/36352610802_bf190e2f8b_o-1.jpeg",
    alt: "Autumn trail in Northern Michigan",
  },
  {
    src: "/images/galleries/northern-michigan/38454401945_4d5871d056_o.jpg",
    alt: "Rough Great Lakes water along a Northern Michigan breakwall",
  },
  {
    src: "/images/galleries/northern-michigan/breakwall right copy_edit.jpg",
    alt: "Storm waves striking a Northern Michigan breakwall",
  },
  {
    src: "/images/galleries/northern-michigan/cherries.jpg",
    alt: "Northern Michigan cherries",
  },
  {
    src: "/images/galleries/northern-michigan/Mackinac Lighthouse-Bridge.jpg",
    alt: "Lighthouse with the Mackinac Bridge in the distance",
  },
  {
    src: "/images/galleries/northern-michigan/Petoskey.jpeg",
    alt: "Petoskey Michigan waterfront",
  },
  {
    src: "/images/galleries/northern-michigan/Sunset Petoskey.jpg",
    alt: "Sunset over the water near Petoskey Michigan",
  },
  {
    src: "/images/galleries/northern-michigan/TNT_3773_HDR copy.jpg",
    alt: "Autumn waterfront walkway in Northern Michigan",
  },
  {
    src: "/images/galleries/northern-michigan/TNT_5792.jpg",
    alt: "Lavender fields in Northern Michigan",
  },
];

export default function NorthernMichiganPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
            Snippets of Time Photography
          </p>

          <h1 className="mt-4 text-4xl font-light tracking-[0.18em] md:text-6xl">
            Northern Michigan
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            The Great Lakes, lighthouses, forests, vineyards, changing seasons,
            quiet shorelines, and the unmistakable character of Northern Michigan.
          </p>
        </div>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="mb-5 break-inside-avoid overflow-hidden bg-zinc-950"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-auto w-full transition duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center">
          <a
            href="/galleries"
            className="text-sm uppercase tracking-[0.25em] text-gray-300 transition hover:text-amber-300"
          >
            ← Back to Galleries
          </a>
        </div>
      </section>
    </main>
  );
}