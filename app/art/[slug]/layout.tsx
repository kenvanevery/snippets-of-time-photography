
import type { Metadata } from "next";
import { artworks } from "@/app/data/artworks";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const artwork = artworks[slug as keyof typeof artworks];

  if (!artwork) {
    return {
      title: "Artwork Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = `${artwork.title} | Fine Art Photography Print`;

  const description =
    `${artwork.description} Available as a professional fine art photography print from Snippets of Time Photography.`;

  const url =
    `https://www.snippetsoftimephotography.com/art/${encodeURIComponent(slug)}`;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Snippets of Time Photography",
      type: "website",
      images: [
        {
          url: artwork.image,
          alt: artwork.title,
        },
      ],
    },
  };
}

export default function ArtworkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
