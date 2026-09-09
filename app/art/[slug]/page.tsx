"use client";

import { artworks } from "@/app/data/artworks";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";

type FinishName =
  | "Fine Art Print"
  | "Gallery Wrap Canvas"
  | "Metal Print"
  | "Acrylic Print";

type ProductOption = {
  size: string;
  price: number;
};

type Finish = {
  name: FinishName;
  subtitle: string;
  description: string;
  options: ProductOption[];
};

const finishes: Finish[] = [
  {
    name: "Fine Art Print",
    subtitle: "Premium Fine Art Paper",
    description:
      "Archival fine art printing on premium paper for a traditional gallery presentation. Print arrives unframed.",
    options: [
      { size: "12×18", price: 79 },
      { size: "16×24", price: 179 },
      { size: "20×30", price: 229 },
      { size: "24×36", price: 349 },
      { size: "30×45", price: 449 },
      { size: "40×60", price: 749 },
    ],
  },
  {
    name: "Gallery Wrap Canvas",
    subtitle: 'Premium 1½" Gallery Wrap',
    description:
      "A professionally produced, ready-to-hang canvas with a dimensional gallery-wrap presentation.",
    options: [
      { size: "12×18", price: 199 },
      { size: "16×24", price: 279 },
      { size: "20×30", price: 349 },
      { size: "24×36", price: 499 },
      { size: "40×60", price: 1199 },
    ],
  },
  {
    name: "Metal Print",
    subtitle: "Premium Metal",
    description:
      "A contemporary presentation with vivid color, exceptional depth, and crisp photographic detail.",
    options: [
      { size: "12×18", price: 179 },
      { size: "16×24", price: 279 },
      { size: "20×30", price: 399 },
      { size: "24×36", price: 549 },
      { size: "30×45", price: 799 },
      { size: "40×60", price: 1499 },
    ],
  },
  {
    name: "Acrylic Print",
    subtitle: "Premium Acrylic with Float Mount",
    description:
      "Our premium contemporary presentation, combining brilliant color and dimensional clarity with a clean floating display.",
    options: [
      { size: "12×18", price: 299 },
      { size: "16×24", price: 399 },
      { size: "20×30", price: 549 },
      { size: "24×36", price: 799 },
      { size: "40×60", price: 1999 },
    ],
  },
];

export default function ArtworkPage() {
  const params = useParams();
  const slug = params.slug as keyof typeof artworks;
  const artwork = artworks[slug];
if (!artwork) {
  return null;
}
const canvasOptions = Object.entries(
  artwork.products["Gallery Wrap Canvas"].sizes
).map(([size, details]) => ({
  size,
  price: details.retailPrice,
}));
  const [selectedFinish, setSelectedFinish] =

    useState<FinishName>("Gallery Wrap Canvas");

  const currentFinish = useMemo(() => {
  const finish = finishes.find((finish) => finish.name === selectedFinish)!;

  if (finish.name === "Gallery Wrap Canvas") {
    return {
      ...finish,
      options: canvasOptions,
    };
  }

  return finish;
}, [selectedFinish, canvasOptions]);

  const [selectedSize, setSelectedSize] = useState("20×30");
const [showWallPreview, setShowWallPreview] = useState(false);
const [roomImage, setRoomImage] = useState<string | null>(null);
const [wallX, setWallX] = useState(50);
const [wallY, setWallY] = useState(50);
const [wallWidth, setWallWidth] = useState(30);
  const currentOption =
    currentFinish.options.find((option) => option.size === selectedSize) ??
    currentFinish.options[0];

  function chooseFinish(finish: Finish) {
    setSelectedFinish(finish.name);

    const sizeStillAvailable = finish.options.some(
      (option) => option.size === selectedSize
    );

    if (!sizeStillAvailable) {
      setSelectedSize(finish.options[0].size);
    }
  }
async function handleCheckout() {
  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
   body: JSON.stringify({
  finish: selectedFinish,
  size: currentOption.size,
  artworkTitle: artwork.title,
  artworkSlug: slug,
}),
  });

  const data = await response.json();

  if (!response.ok || !data.url) {
    alert("Unable to start checkout. Please try again.");
    return;
  }

  window.location.href = data.url;
}

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="mb-10 flex items-center justify-between gap-6">
  <Link href="/" className="shrink-0">
    <img
      src="/branding/logo/logo-gold.png"
      alt="Snippets of Time Photography"
      className="h-16 w-auto sm:h-20"
    />
  </Link>

  <button
    type="button"
   onClick={() => setShowWallPreview(true)}
    className="rounded-full bg-[#d6b76a] px-6 py-3 text-sm font-medium text-black transition hover:brightness-110 sm:px-8"
  >
    View on Your Wall
  </button>
</div>
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <Link
            href={artwork.galleryHref}
            className="text-sm uppercase tracking-[0.25em] text-amber-300 transition hover:text-amber-200"
          >
          ← {artwork.galleryName}
          </Link>

          <Link
            href="/galleries"
            className="text-sm uppercase tracking-[0.25em] text-gray-400 transition hover:text-white"
          >
            All Galleries
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div>
            <div className="overflow-hidden bg-zinc-950">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
              Snippets of Time Photography
            </p>

            <h1 className="mt-4 text-4xl font-light tracking-[0.08em] md:text-5xl">
              {artwork.title}
            </h1>

            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-gray-400">
              {artwork.location}
            </p>

            <p className="mt-7 leading-8 text-gray-300">
  {artwork.description}
</p>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Step 1
              </p>

              <h2 className="mt-2 text-xl font-light tracking-[0.12em]">
                Choose Your Finish
              </h2>

              <div className="mt-5 grid gap-3">
                {finishes.map((finish) => {
                  const active = finish.name === selectedFinish;

                  return (
                    <button
                      key={finish.name}
                      type="button"
                      onClick={() => chooseFinish(finish)}
                      className={`w-full border p-5 text-left transition ${
                        active
                          ? "border-amber-300 bg-amber-300/10"
                          : "border-white/15 bg-zinc-950 hover:border-amber-300/50"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg tracking-[0.08em] text-amber-300">
                            {finish.name}
                          </h3>

                          <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gray-500">
                            {finish.subtitle}
                          </p>
                        </div>

                        <span
                          className={`mt-1 h-4 w-4 rounded-full border ${
                            active
                              ? "border-amber-300 bg-amber-300"
                              : "border-gray-600"
                          }`}
                        />
                      </div>

                      <p className="mt-3 text-sm leading-6 text-gray-400">
                        {finish.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Step 2
              </p>

              <h2 className="mt-2 text-xl font-light tracking-[0.12em]">
                Choose Your Size
              </h2>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {currentFinish.options.map((option) => {
                  const active = option.size === currentOption.size;

                  return (
                    <button
                      key={option.size}
                      type="button"
                      onClick={() => setSelectedSize(option.size)}
                      className={`border px-4 py-4 text-center transition ${
                        active
                          ? "border-amber-300 bg-amber-300/10 text-amber-300"
                          : "border-white/15 text-gray-200 hover:border-amber-300/50"
                      }`}
                    >
                      <span className="block text-sm tracking-[0.12em]">
                        {option.size}
                      </span>

                      <span className="mt-2 block text-xs text-gray-500">
                        ${option.price.toLocaleString()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 border border-amber-300/40 bg-zinc-950 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Your Selection
              </p>

              <div className="mt-4 flex items-end justify-between gap-6">
                <div>
                  <p className="text-lg text-white">{selectedFinish}</p>
                  <p className="mt-1 text-sm text-gray-400">
                    {currentOption.size}
                  </p>
                </div>

                <p className="text-3xl font-light text-amber-300">
                  ${currentOption.price.toLocaleString()}
                </p>
              </div>

              <button
  type="button"
  onClick={handleCheckout}
  className="mt-6 w-full border border-amber-300 px-6 py-4 text-sm uppercase tracking-[0.25em] text-amber-300 transition hover:bg-amber-300 hover:text-black"
>
  Secure Checkout
</button>

              <p className="mt-4 text-center text-xs leading-5 text-gray-500">
                Secure checkout will be processed through Stripe. Artwork will
                be professionally produced and fulfilled through our print lab.
              </p>
            </div>
          </div>
        </div>
      </section>
      {showWallPreview && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
    <div className="relative w-full max-w-6xl rounded-2xl border border-zinc-700 bg-zinc-950 p-6 shadow-2xl">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
            Snippets of Time Photography
          </p>
          <h2 className="mt-2 text-2xl font-light text-white">
            View on Your Wall
          </h2>
        </div>

        <button
          type="button"
          onClick={() => {
            setShowWallPreview(false);
            setRoomImage(null);
          }}
          className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-white hover:border-amber-300 hover:text-amber-300"
        >
          Close
        </button>
      </div>

      {!roomImage ? (
        <div className="flex min-h-[420px] flex-col items-center justify-center rounded-xl border border-dashed border-zinc-700 bg-zinc-900/50 p-8 text-center">
          <p className="mb-2 text-xl text-white">
            Upload a photo of your wall
          </p>

          <p className="mb-6 max-w-xl text-sm leading-6 text-zinc-400">
            Use a straight-on photo of the room for the best preview.
          </p>

          <label className="cursor-pointer rounded-full bg-[#d6b76a] px-7 py-3 text-sm font-medium text-black hover:brightness-110">
            Choose Room Photo
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(event) => {
                const file = event.target.files?.[0];

                if (file) {
                  setRoomImage(URL.createObjectURL(file));
                }
              }}
            />
          </label>
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-xl bg-black">
          <img
            src={roomImage}
            alt="Room preview"
            className="max-h-[70vh] w-full object-contain"
          />

          <img
  src={artwork.image}
  alt={artwork.title}
  className="absolute -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-2xl"
  style={{
    left: `${wallX}%`,
    top: `${wallY}%`,
    width: `${wallWidth}%`,
  }}
/><div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-wrap items-center justify-center gap-2 rounded-full bg-black/70 px-4 py-3 backdrop-blur">
  <button
    type="button"
    onClick={() => setWallX((value) => Math.max(10, value - 5))}
    className="rounded-full border border-zinc-600 px-3 py-2 text-sm text-white hover:border-amber-300"
  >
    ←
  </button>

  <button
    type="button"
    onClick={() => setWallX((value) => Math.min(90, value + 5))}
    className="rounded-full border border-zinc-600 px-3 py-2 text-sm text-white hover:border-amber-300"
  >
    →
  </button>

  <button
    type="button"
    onClick={() => setWallY((value) => Math.max(10, value - 5))}
    className="rounded-full border border-zinc-600 px-3 py-2 text-sm text-white hover:border-amber-300"
  >
    ↑
  </button>

  <button
    type="button"
    onClick={() => setWallY((value) => Math.min(90, value + 5))}
    className="rounded-full border border-zinc-600 px-3 py-2 text-sm text-white hover:border-amber-300"
  >
    ↓
  </button>

  <button
    type="button"
    onClick={() => setWallWidth((value) => Math.max(10, value - 5))}
    className="rounded-full border border-zinc-600 px-3 py-2 text-sm text-white hover:border-amber-300"
  >
    Smaller
  </button>

  <button
    type="button"
    onClick={() => setWallWidth((value) => Math.min(70, value + 5))}
    className="rounded-full border border-zinc-600 px-3 py-2 text-sm text-white hover:border-amber-300"
  >
    Larger
  </button>
</div>
        </div>
      )}
    </div>
  </div>
)}
    </main>
  );
}