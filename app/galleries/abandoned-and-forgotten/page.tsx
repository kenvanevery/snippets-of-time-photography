"use client";

import Link from "next/link";

const photos = [
  {
    src: "/images/galleries/abandoned-and-forgotten/desoto-last-ride.jpg",
    alt: "DeSoto Last Ride",
    slug: "desoto-last-ride",
  },
  {
    src: "/images/galleries/abandoned-and-forgotten/doorway-to-the-past.jpg",
    alt: "Doorway to the Past",
    slug: "doorway-to-the-past",
  },
  {
    src: "/images/galleries/abandoned-and-forgotten/reclaimed-by-nature.jpg",
    alt: "Reclaimed by Nature",
    slug: "reclaimed-by-nature",
  },
  {
    src: "/images/galleries/abandoned-and-forgotten/the-abandoned-church.jpg",
    alt: "The Abandoned Church",
    slug: "the-abandoned-church",
  },
  {
    src: "/images/galleries/abandoned-and-forgotten/the-empty-factory.jpg",
    alt: "The Empty Factory",
    slug: "the-empty-factory",
  },
  {
    src: "/images/galleries/abandoned-and-forgotten/the-house-time-forgot.jpg",
    alt: "The House Time Forgot",
    slug: "the-house-time-forgot",
  },
  {
    src: "/images/galleries/abandoned-and-forgotten/through-the-doorway.jpg",
    alt: "Through the Doorway",
    slug: "through-the-doorway",
  },
  {
    src: "/images/galleries/abandoned-and-forgotten/what-remains.jpg",
    alt: "What Remains",
    slug: "what-remains",
  },
  {
    src: "/images/galleries/abandoned-and-forgotten/windows-of-a-forgotten-factory.jpg",
    alt: "Windows of a Forgotten Factory",
    slug: "windows-of-a-forgotten-factory",
  },
];

export default function AbandonedAndForgottenGallery() {
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
          Abandoned & Forgotten
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
          Weathered structures, forgotten places, and remnants of another time
          that still have stories to tell.
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