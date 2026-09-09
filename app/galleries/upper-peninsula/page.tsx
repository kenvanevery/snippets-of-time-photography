const photos = [
  {
    src: "/images/galleries/upper-peninsula/Atop Sugarloaf Mountain_.jpg",
    alt: "Atop Sugarloaf Mountain",
    slug: "atop-sugarloaf-mountain",
  },
  {
    src: "/images/galleries/upper-peninsula/Autumn in the UP.jpg",
    alt: "Autumn in the UP",
    slug: "autumn-in-the-up",
  },
  {
    src: "/images/galleries/upper-peninsula/Autumn Walk.jpg",
    alt: "Autumn Walk",
    slug: "autumn-walk",
  },
  {
    src: "/images/galleries/upper-peninsula/Black Bear.jpg",
    alt: "Black Bear",
    slug: "black-bear",
  },
  {
    src: "/images/galleries/upper-peninsula/Brockway Mountain Overlook 1.jpg",
    alt: "Brockway Mountain Overlook",
    slug: "brockway-mountain-overlook-1",
  },
  {
    src: "/images/galleries/upper-peninsula/Cliffs Lake in the Clouds.jpg",
    alt: "Cliffs Lake in the Clouds",
    slug: "cliffs-lake-in-the-clouds",
  },
  {
    src: "/images/galleries/upper-peninsula/Crisp Point Driftwood.jpg",
    alt: "Crisp Point Driftwood",
    slug: "crisp-point-driftwood",
  },
  {
 src: "/images/galleries/upper-peninsula/Lighthouse Crisp Point.jpg",
    alt: "Lighthouse Crisp Point",
    slug: "crisp-point-lighthouse",
  },
  {
    src: "/images/galleries/upper-peninsula/Eagle Harbor Light Station 1.jpg",
    alt: "Eagle Harbor Light Station",
    slug: "eagle-harbor-light-station",
  },
  {
    src: "/images/galleries/upper-peninsula/First Snow_.jpg",
    alt: "First Snow",
    slug: "first-snow",
  },
  {
    src: "/images/galleries/upper-peninsula/Forest path.jpg",
    alt: "Forest Path",
    slug: "forest-path",
  },
  {
    src: "/images/galleries/upper-peninsula/Grand Island Lighthouse.jpg",
    alt: "Grand Island Lighthouse",
    slug: "grand-island-lighthouse",
  },
  {
    src: "/images/galleries/upper-peninsula/Horseshoe1-2.jpg",
    alt: "Horseshoe",
    slug: "horseshoe",
  },
  {
    src: "/images/galleries/upper-peninsula/Lake Superior Coast in the Fall.jpg",
    alt: "Lake Superior Coast in the Fall",
    slug: "lake-superior-coast-in-the-fall",
  },
  {
    src: "/images/galleries/upper-peninsula/Lake Superior.jpg",
    alt: "Lake Superior",
    slug: "lake-superior",
  },
  {
    src: "/images/galleries/upper-peninsula/Crisp Point_.jpg",
    alt: "Lighthouse Crisp Point",
    slug: "crisp-point",
  },
  {
    src: "/images/galleries/upper-peninsula/Little Presque Isle island.jpg",
    alt: "Little Presque Isle Island",
    slug: "little-presque-isle-island",
  },
  {
    src: "/images/galleries/upper-peninsula/Lovers Leap Arch.jpg",
    alt: "Lovers Leap Arch",
    slug: "lovers-leap-arch",
  },
  {
    src: "/images/galleries/upper-peninsula/Marquette Ore Dock.jpg",
    alt: "Marquette Ore Dock",
    slug: "marquette-ore-dock",
  },
  {
    src: "/images/galleries/upper-peninsula/Might Mac fro Across.jpg",
    alt: "Mighty Mac from Across",
    slug: "might-mac-from-across",
  },
  {
    src: "/images/galleries/upper-peninsula/Miners Castle Close.jpg",
    alt: "Miners Castle Close",
    slug: "miners-castle-close",
  },
  {
    src: "/images/galleries/upper-peninsula/Miners Castle.jpg",
    alt: "Miners Castle",
    slug: "miners-castle",
  },
  {
   src: "/images/galleries/upper-peninsula/Miners Castle Birch.jpg",
    alt: "Miners Castle Birch",
    slug: "miners-castle-birch",
  },
  {
    src: "/images/galleries/upper-peninsula/Munising Falls.jpg",
    alt: "Munising Falls",
    slug: "munising-falls",
  },
  {
    src: "/images/galleries/upper-peninsula/Old Boat 1.jpg",
    alt: "Old Boat",
    slug: "old-boat-1",
  },
  {
    src: "/images/galleries/upper-peninsula/Pic Rock.jpg",
    alt: "Pic Rock",
    slug: "pic-rock",
  },
  {
    src: "/images/galleries/upper-peninsula/Pictured Rocks Lakeshore.jpg",
    alt: "Pictured Rocks Lakeshore",
    slug: "pictured-rocks-lakeshore",
  },
  {
    src: "/images/galleries/upper-peninsula/Pictured Rocks National Lakeshore trail_.jpg",
    alt: "Pictured Rocks National Lakeshore Trail",
    slug: "pictured-rocks-national-lakeshore-trail",
  },
  {
    src: "/images/galleries/upper-peninsula/Stream and Bridge.jpg",
    alt: "Stream and Bridge",
    slug: "stream-and-bridge",
  },
  {
    src: "/images/galleries/upper-peninsula/Through the trees 1.jpg",
    alt: "Through the Trees",
    slug: "through-the-trees",
  },
  {
    src: "/images/galleries/upper-peninsula/Trees the tree 11.jpg",
    alt: "Trees the Tree",
    slug: "trees-the-tree",
  },
  {
    src: "/images/galleries/upper-peninsula/Wagner Falls 1.jpg",
    alt: "Wagner Falls",
    slug: "wagner-falls",
  },
  {
    src: "/images/galleries/upper-peninsula/Yellow Dog Falls.jpg",
    alt: "Yellow Dog Falls",
    slug: "yellow-dog-falls",
  },
];

export default function UpperPeninsulaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
            Snippets of Time Photography
          </p>

          <h1 className="mt-4 text-4xl font-light tracking-[0.18em] md:text-6xl">
            Upper Peninsula
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
    Lake Superior, rugged shorelines, waterfalls, lighthouses, forests, and the wild character of Michigan's Upper Peninsula.
</p>
</div>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="mb-5 break-inside-avoid overflow-hidden bg-zinc-950"
            >
            {photo.slug ? (
<a href={`/art/${photo.slug}`}>
    <img
      src={photo.src}
      alt={photo.alt}
      className="h-auto w-full cursor-pointer transition duration-500 hover:scale-[1.02]"
      loading="lazy"
    />
  </a>
) : (
  <img
    src={photo.src}
    alt={photo.alt}
    className="h-auto w-full transition duration-500 hover:scale-[1.02]"
    loading="lazy"
  />
)}
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

