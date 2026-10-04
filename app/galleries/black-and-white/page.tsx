"use client";

import Link from "next/link";

const photos = [
  {
    src: "/images/galleries/black-and-white/driftwood-at-crisp-point.jpg",
    alt: "Driftwood at Crisp Point",
    slug: "driftwood-at-crisp-point",
  },
  {
    src: "/images/galleries/black-and-white/eiffel-tower-in-monochrome.jpg",
    alt: "Eiffel Tower in Monochrome",
    slug: "eiffel-tower-in-monochrome",
  },
  {
    src: "/images/galleries/black-and-white/full-moon-cleaned-print-ready.jpg",
    alt: "Full Moon",
    slug: "full-moon",
  },
  {
    src: "/images/galleries/black-and-white/guardian-of-the-coast.jpg",
    alt: "Guardian of the Coast",
    slug: "guardian-of-the-coast",
  },
  {
    src: "/images/galleries/black-and-white/horseshoe-falls.jpg",
    alt: "Horseshoe Falls",
    slug: "horseshoe-falls",
  },
  {
    src: "/images/galleries/black-and-white/looking-up-900-north-michigan.jpg",
    alt: "Looking Up at 900 North Michigan",
    slug: "looking-up-900-north-michigan",
  },
  {
    src: "/images/galleries/black-and-white/neuschwanstein-castle-black-white.jpg",
    alt: "Neuschwanstein Castle in Black and White",
    slug: "neuschwanstein-castle-black-white",
  },
  {
    src: "/images/galleries/black-and-white/notre-dame-paris.jpg",
    alt: "Notre Dame Paris",
    slug: "notre-dame-paris",
  },
  {
    src: "/images/galleries/black-and-white/pere-marquette-1225-steam.jpg",
    alt: "Pere Marquette 1225 in Steam",
    slug: "pere-marquette-1225-steam",
  },
  {
    src: "/images/galleries/black-and-white/pere-marquette-1225.jpg",
    alt: "Pere Marquette 1225",
    slug: "pere-marquette-1225",
  },
  {
    src: "/images/galleries/black-and-white/plymouth-pt50-pickup.jpg",
    alt: "Vintage Plymouth Pickup",
    slug: "plymouth-pt50-pickup",
  },
  {
    src: "/images/galleries/black-and-white/Pont_de_Bir-Hakeimm_Bridge.jpg",
    alt: "Pont de Bir-Hakeim Bridge",
    slug: "pont-de-bir-hakeim-bridge",
  },
  {
    src: "/images/galleries/black-and-white/the-old-gathering.jpg",
    alt: "The Old Gathering",
    slug: "the-old-gathering",
  },
  {
    src: "/images/galleries/black-and-white/white-tulip-in-darkness.jpg",
    alt: "White Tulip in Darkness",
    slug: "white-tulip-in-darkness",
  },
];

export default function BlackAndWhiteGallery() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: "70px 6% 100px",
      }}
    >
      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 400,
            letterSpacing: "0.08em",
            marginBottom: "16px",
          }}
        >
          Black & White
        </h1>

        <div
          style={{
            width: "105px",
            height: "2px",
            background: "#d4af37",
            margin: "0 auto 30px",
          }}
        />

        <p
          style={{
            maxWidth: "850px",
            margin: "0 auto 65px",
            textAlign: "center",
            fontSize: "1.15rem",
            lineHeight: 1.7,
            color: "#d7d7d7",
          }}
        >
          Monochrome photographs shaped by light, shadow, texture, and timeless
          detail.
        </p>

        <div
          style={{
            columns: "2 500px",
            columnGap: "34px",
          }}
        >
          {photos.map((photo) => (
            <Link
              key={photo.slug}
              href={`/art/${photo.slug}`}
              style={{
                display: "block",
                breakInside: "avoid",
                marginBottom: "34px",
                textDecoration: "none",
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}