const photos = [
  {
    src: "/images/galleries/northern-michigan/Barn with stick and Daisies.jpg",
    alt: "Daisies and rustic fence in Northern Michigan",
  },
  {
    src: "/images/galleries/northern-michigan/Breakwall during storm with orngfe sky.jpg",
    alt: "Waves crashing over a Northern Michigan breakwall beneath an orange sky",
  },
  {
    src: "/images/galleries/northern-michigan/Charlevoix Lighthouse with freighter_.jpg",
    alt: "Charlevoix lighthouse with a Great Lakes freighter",
  },
  {
    src: "/images/galleries/northern-michigan/Cheif Petoskey Sunset and breakwall.jpg",
    alt: "Chief Petoskey statue overlooking Little Traverse Bay at sunset",
  },
  {
    src: "/images/galleries/northern-michigan/Cheif Petoskey Sunset.jpg",
    alt: "Chief Petoskey statue overlooking a Northern Michigan sunset",
  },
  {
    src: "/images/galleries/northern-michigan/cherries.jpg",
    alt: "Red cherries growing in Northern Michigan",
  },
  {
    src: "/images/galleries/northern-michigan/Downtown Trolley.jpg",
    alt: "Downtown trolley in Northern Michigan",
  },
  {
    src: "/images/galleries/northern-michigan/Forest Meets Lak in Winter.jpg",
    alt: "Winter forest meeting the frozen shoreline in Northern Michigan",
  },
  {
    src: "/images/galleries/northern-michigan/Forest.jpg",
    alt: "Looking upward through a Northern Michigan forest canopy",
  },
  {
    src: "/images/galleries/northern-michigan/Harbor Point Harbor Springs.jpg",
    alt: "Harbor Point overlooking Harbor Springs Michigan",
  },
  {
    src: "/images/galleries/northern-michigan/Lavender Field with road.jpg",
    alt: "Lavender field along a country road in Northern Michigan",
  },
  {
    src: "/images/galleries/northern-michigan/Mac at Night.jpg",
    alt: "Mackinac Bridge illuminated at night",
  },
  {
    src: "/images/galleries/northern-michigan/Mackinac Bridge wide angle.jpg",
    alt: "Wide angle view of the Mackinac Bridge",
  },
  {
    src: "/images/galleries/northern-michigan/Mackinac Lighthouse-Bridge.jpg",
    alt: "Old Mackinac Point Lighthouse with the Mackinac Bridge",
  },
  {
   src: "/images/galleries/northern-michigan/northern-michigan-farm-winter.jpg",
    alt: "Northern Michigan farm country during winter",
  },
  {
    src: "/images/galleries/northern-michigan/Old Mission Pennisula August.jpg",
    alt: "Old Mission Peninsula landscape in August",
  },
  {
    src: "/images/galleries/northern-michigan/Paroskey Marina Golden_.jpg",
    alt: "Petoskey marina during golden hour",
  },
  {
    src: "/images/galleries/northern-michigan/Petoskey Bay Front.jpg",
    alt: "Petoskey waterfront along Little Traverse Bay",
  },
  {
    src: "/images/galleries/northern-michigan/Petoskey Breakwall begining of winter.jpg",
    alt: "Waves striking the Petoskey breakwall at the beginning of winter",
  },
  {
    src: "/images/galleries/northern-michigan/Petoskey.jpg",
    alt: "Petoskey Michigan overlooking Little Traverse Bay",
  },
  {
    src: "/images/galleries/northern-michigan/Red Sunset Petoskey Marina.jpg",
    alt: "Red sunset over the Petoskey marina",
  },
  {
    src: "/images/galleries/northern-michigan/SleepingBearSandune.jpg",
    alt: "Sleeping Bear Dunes overlooking Lake Michigan",
  },
  {
    src: "/images/galleries/northern-michigan/Sunset Petoskey.jpg",
    alt: "Sunset over Little Traverse Bay in Petoskey",
  },
  {
    src: "/images/galleries/northern-michigan/Supermoon over the Bay.jpg",
    alt: "Supermoon reflecting across Little Traverse Bay",
  },
  {
    src: "/images/galleries/northern-michigan/Trillium in Northern Michigan.jpg",
    alt: "Trillium blooming beneath a Northern Michigan forest",
  },
  {
    src: "/images/galleries/northern-michigan/tunneloftrees.jpg",
    alt: "Autumn along the Tunnel of Trees in Northern Michigan",
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