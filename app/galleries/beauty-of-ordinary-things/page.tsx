const photos = [
  {
    src: "/images/galleries/beauty-of-ordinary-things/Red-Bicycle-Garden.jpg",
    alt: "A red bicycle tucked into lush green foliage and flowers",
    slug: "red-bicycle-garden",
  },
  {
    src: "/images/galleries/beauty-of-ordinary-things/abstract-forest.jpg",
    alt: "Abstract impressionistic view of a forest",
    slug: "abstract-forest",
  },
  {
    src: "/images/galleries/beauty-of-ordinary-things/grapes-on-the-vine.jpg",
    alt: "Ripening grapes hanging on the vine",
    slug: "grapes-on-the-vine",
  },
  {
    src: "/images/galleries/beauty-of-ordinary-things/Grist_Mill_water_wheel.jpg",
    alt: "Historic wooden grist mill and water wheel",
    slug: "grist-mill-water-wheel",
  },
  {
    src: "/images/galleries/beauty-of-ordinary-things/hot-air-balloon-northern-michigan.jpg",
    alt: "Colorful hot air balloon floating beneath a blue sky",
    slug: "hot-air-balloon-northern-michigan",
  },
  {
    src: "/images/galleries/beauty-of-ordinary-things/looking-up-through-the-forest.jpg",
    alt: "Looking upward through tall forest trees toward the sky",
    slug: "looking-up-through-the-forest",
  },
  {
    src: "/images/galleries/beauty-of-ordinary-things/monarch-on-orange-flowers.jpg",
    alt: "Monarch butterfly resting on orange flowers",
    slug: "monarch-on-orange-flowers",
  },
  {
    src: "/images/galleries/beauty-of-ordinary-things/monet-pond-garden.jpg",
    alt: "Colorful garden reflected in a quiet pond",
    slug: "monet-pond-garden",
  },
  {
    src: "/images/galleries/beauty-of-ordinary-things/mums-over-walloon-lake.jpg",
    alt: "Colorful chrysanthemums overlooking Walloon Lake",
    slug: "mums-over-walloon-lake",
  },
  {
    src: "/images/galleries/beauty-of-ordinary-things/old-mission-peninsula-grapes.jpg",
    alt: "Sunlit grapes growing on Old Mission Peninsula",
    slug: "old-mission-peninsula-grapes",
  },
  {
    src: "/images/galleries/beauty-of-ordinary-things/red-tulips.jpg",
    alt: "Bright red and orange tulips in spring sunlight",
    slug: "red-tulips",
  },
  {
    src: "/images/galleries/beauty-of-ordinary-things/sunflower.jpg",
    alt: "Close-up study of a glowing sunflower",
    slug: "sunflower",
  },
  {
    src: "/images/galleries/beauty-of-ordinary-things/wagner-falls.jpg",
    alt: "Wagner Falls flowing through a Michigan forest",
    slug: "wagner-falls",
  },
  {
    src: "/images/galleries/beauty-of-ordinary-things/weathered-fence-post.jpg",
    alt: "Weathered wooden fence post beside a yellow wildflower",
    slug: "weathered-fence-post",
  },
  {
    src: "/images/galleries/beauty-of-ordinary-things/wild-babys-breath.jpg",
    alt: "Delicate wild baby's breath against a soft blue background",
    slug: "wild-babys-breath",
  },
  {
    src: "/images/galleries/beauty-of-ordinary-things/woodland-fern.jpg",
    alt: "Green woodland fern illuminated by forest light",
    slug: "woodland-fern",
  },
];

export default function BeautyOfOrdinaryThingsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
            Snippets of Time Photography
          </p>

          <h1 className="mt-6 text-4xl font-light md:text-6xl">
            The Beauty of Ordinary Things
          </h1>

          <div className="mx-auto my-8 h-px w-24 bg-amber-300" />

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-300">
            Unexpected beauty found in everyday objects, quiet details,
            overlooked places, and ordinary moments worth seeing differently.
          </p>
        </div>

        <div className="mt-16 columns-1 gap-8 md:columns-2">
          {photos.map((photo) => (
            <div key={photo.src} className="mb-8 break-inside-avoid overflow-hidden bg-neutral-950">
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