const photos = [
  {
    src: "/images/galleries/Appalachia/Great_Smokey_Mountains.jpg",
    alt: "Great Smoky Mountains landscape",
    slug: "great-smokey-mountains",
  },
  {
    src: "/images/galleries/Appalachia/Dan_Lawson_Barn.jpg",
    alt: "Historic Dan Lawson Barn in Appalachia",
    slug: "dan-lawson-barn",
  },
  {
    src: "/images/galleries/Appalachia/Wigwam_Falls.jpg",
    alt: "Wigwam Falls in the Appalachian Mountains",
    slug: "wigwam-falls",
  },
  {
    src: "/images/galleries/Appalachia/Morton_Overlook.jpg",
    alt: "Mountain landscape from Morton Overlook",
    slug: "morton-overlook",
  },
  {
    src: "/images/galleries/Appalachia/Gristmill.jpg",
    alt: "Historic Appalachian gristmill",
    slug: "gristmill",
  },
  {
  src: "/images/galleries/Appalachia/newfound-gap-overlook.jpg",
    alt: "Mountain view from Newfound Gap Overlook",
    slug: "newfound-gap-overlook",
  },
  {
    src: "/images/galleries/Appalachia/Dinsmore_homestead.jpg",
    alt: "Historic Dinsmore homestead",
    slug: "dinsmore-homestead",
  },
  {
    src: "/images/galleries/Appalachia/newfound-gap-overlook.jpg",
    alt: "Appalachian mountain view from Ben Morton Overlook",
    slug: "ben-morton-overlook",
  },
  {
    src: "/images/galleries/Appalachia/Gauley_Bridge.jpg",
    alt: "Gauley Bridge in Appalachia",
    slug: "gauley-bridge",
  },
  {
    src: "/images/galleries/Appalachia/Dan_Lawson_Place.jpg",
    alt: "Historic Dan Lawson Place",
    slug: "dan-lawson-place",
  },
  {
    src: "/images/galleries/Appalachia/Bote_Mountain_Tunnel.jpg",
    alt: "Bote Mountain Tunnel in the Appalachian Mountains",
    slug: "bote-mountain-tunnel",
  },
];

export default function AppalachiaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
            Snippets of Time Photography
          </p>

          <h1 className="mt-6 text-4xl font-light md:text-6xl">
            Appalachia
          </h1>

          <div className="mx-auto my-8 h-px w-24 bg-amber-300" />

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-300">
            Mountain landscapes, historic homesteads, winding roads, and
            quiet places that reflect the enduring character of Appalachia.
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