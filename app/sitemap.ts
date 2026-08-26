import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/ai-diagnostic",
    "/how-it-works",
    "/industries",
    "/about",
    "/contact",
    "/diagnostic",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route === "/diagnostic" ? 0.9 : 0.7,
  }));
}
