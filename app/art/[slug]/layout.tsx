
import type { Metadata } from "next";
import { artworks } from "@/app/data/artworks";
import pendingArtworks from "@/app/data/pending-artwork-slugs.json";
import { getPrintProduct } from "@/app/lib/print-products";

const BASE_URL =
  "https://www.snippetsoftimephotography.com";

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

  const title =
    `${artwork.title} | Fine Art Photography Print`;

  const description =
    `${artwork.description} Available as a professional fine art photography print from Snippets of Time Photography.`;

  const url =
    `${BASE_URL}/art/${encodeURIComponent(slug)}`;

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

export default async function ArtworkLayout({
  children,
  params,
}: Props) {
  const { slug } = await params;
  const artwork = artworks[slug as keyof typeof artworks];

  if (!artwork) {
    return <>{children}</>;
  }

  const product = getPrintProduct(
    "Fine Art Print",
    "8x12"
  );

  const isPending = (
    pendingArtworks as readonly string[]
  ).includes(slug);

  const url =
    `${BASE_URL}/art/${encodeURIComponent(slug)}`;

  const productSchema = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: artwork.title,
        description: artwork.description,
        image: [
          new URL(artwork.image, BASE_URL).href,
        ],
        brand: {
          "@type": "Brand",
          name: "Snippets of Time Photography",
        },
        offers: {
          "@type": "Offer",
          url,
          priceCurrency: "USD",
          price: product.retailPrice,

hasMerchantReturnPolicy: {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "US",
  returnPolicyCategory:
    "https://schema.org/MerchantReturnNotPermitted",
  merchantReturnLink:
    `${BASE_URL}/shipping-returns`,
},

shippingDetails: {
  "@type": "OfferShippingDetails",
  shippingRate: {
    "@type": "MonetaryAmount",
    value: 0,
    currency: "USD",
  },
  shippingDestination: {
    "@type": "DefinedRegion",
    addressCountry: "US",
  },
},

          availability: isPending
            ? "https://schema.org/OutOfStock"
            : "https://schema.org/InStock",
          itemCondition:
            "https://schema.org/NewCondition",
          seller: {
            "@type": "Organization",
            name: "Snippets of Time Photography",
          },
        },
      }
    : null;

  return (
    <>
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              productSchema
            ).replace(/</g, "\\u003c"),
          }}
        />
      )}
      {children}
    </>
  );
}
