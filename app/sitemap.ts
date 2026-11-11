
import type { MetadataRoute } from "next";
import { artworks } from "./data/artworks";

const BASE_URL = "https://snippetsoftimephotography.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/contact",
 "/galleries",
"/galleries/abandoned-and-forgotten",
"/galleries/Appalachia",
"/galleries/beauty-of-ordinary-things",
"/galleries/black-and-white",
"/galleries/Europe",
"/galleries/landscapes",
"/galleries/northern-michigan",
"/galleries/sunrise-sunset",
"/galleries/upper-peninsula",
"/galleries/waterscapes",
"/hype-shots",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const artworkPages: MetadataRoute.Sitemap =
    Object.keys(artworks).map((slug) => ({
      url: `${BASE_URL}/art/${encodeURIComponent(slug)}`,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [...staticPages, ...artworkPages];
}
