const photos = [

{ src: "/images/galleries/upper-peninsula/Atop Sugarloaf Mountain_.jpg", alt: "Atop Sugarloaf Mountain_" },
{ src: "/images/galleries/upper-peninsula/Autumn in the UP.jpg", alt: "Autumn in the UP" },
{ src: "/images/galleries/upper-peninsula/Autumn Walk.jpg", alt: "Autumn Walk" },
{ src: "/images/galleries/upper-peninsula/Black Bear.jpg", alt: "Black Bear" },
{ src: "/images/galleries/upper-peninsula/Brockway Mountain Overlook 1.jpg", alt: "Brockway Mountain Overlook 1" },
{ src: "/images/galleries/upper-peninsula/Cliffs Lake in the Clouds.jpg", alt: "Cliffs Lake in the Clouds" },
{ src: "/images/galleries/upper-peninsula/Crisp Point Driftwood.jpg", alt: "Crisp Point Driftwood" },
{ src: "/images/galleries/upper-peninsula/Crisp Point_.jpg", alt: "Crisp Point_" },
{ src: "/images/galleries/upper-peninsula/Eagle Harbor Light Station 1.jpg", alt: "Eagle Harbor Light Station 1" },
{ src: "/images/galleries/upper-peninsula/First Snow_.jpg", alt: "First Snow_" },
{ src: "/images/galleries/upper-peninsula/Forest path.jpg", alt: "Forest path" },
{ src: "/images/galleries/upper-peninsula/Grand Island Lighthouse.jpg", alt: "Grand Island Lighthouse" },
{ src: "/images/galleries/upper-peninsula/Horseshoe1-2.jpg", alt: "Horseshoe1-2" },
{ src: "/images/galleries/upper-peninsula/Lake Superior Coast in the Fall.jpg", alt: "Lake Superior Coast in the Fall" },
{ src: "/images/galleries/upper-peninsula/Lake Superior.jpg", alt: "Lake Superior" },
{ src: "/images/galleries/upper-peninsula/Lighthouse Crisp Point.jpg", alt: "Lighthouse Crisp Point" },
{ src: "/images/galleries/upper-peninsula/Little Presque Isle island.jpg", alt: "Little Presque Isle island" },
{ src: "/images/galleries/upper-peninsula/Lovers Leap Arch.jpg", alt: "Lovers Leap Arch" },
{ src: "/images/galleries/upper-peninsula/Marquette Ore Dock.jpg", alt: "Marquette Ore Dock" },
{ src: "/images/galleries/upper-peninsula/Might Mac fro Across.jpg", alt: "Might Mac fro Across" },
{ src: "/images/galleries/upper-peninsula/Miners Castle Close.jpg", alt: "Miners Castle Close" },
{ src: "/images/galleries/upper-peninsula/Miners Castle.jpg", alt: "Miners Castle" },
{ src: "/images/galleries/upper-peninsula/Miners Castle_Birchj.jpg", alt: "Miners Castle_Birchj" },
{ src: "/images/galleries/upper-peninsula/Munising Falls.jpg", alt: "Munising Falls" },
{ src: "/images/galleries/upper-peninsula/Old Boat 1.jpg", alt: "Old Boat 1" },
{ src: "/images/galleries/upper-peninsula/Pic Rock.jpg", alt: "Pic Rock" },
{ src: "/images/galleries/upper-peninsula/Pictured Rocks Lakeshore.jpg", alt: "Pictured Rocks Lakeshore" },
{ src: "/images/galleries/upper-peninsula/Pictured Rocks National Lakeshore trail_.jpg", alt: "Pictured Rocks National Lakeshore trail_" },
{ src: "/images/galleries/upper-peninsula/Stream and Bridge.jpg", alt: "Stream and Bridge" },
{ src: "/images/galleries/upper-peninsula/Through the trees 1.jpg", alt: "Through the trees 1" },
{ src: "/images/galleries/upper-peninsula/Trees the tree ll.jpg", alt: "Trees the tree ll" },
{ src: "/images/galleries/upper-peninsula/Wagner Falls 1.jpg", alt: "Wagner Falls 1" },
{ src: "/images/galleries/upper-peninsula/Yellow Dog Falls.jpg", alt: "Yellow Dog Falls" },
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

