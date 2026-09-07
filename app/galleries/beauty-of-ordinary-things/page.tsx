const photos = [
{
  src: "/images/galleries/beauty-of-ordinary-things/Red-Bicycle-Garden.jpg",
  alt: "A red bicycle tucked into lush green foliage and flowers",
  slug: "red-bicycle-garden",
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

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {photos.map((photo) => (
            <div key={photo.src} className="overflow-hidden bg-neutral-950">
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