import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/ai-diagnostic",
    "/how-it-works",
    "/industries",
    "/work",
    "/about",
    "/contact",
    "/diagnostic",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority:
      route === ""
        ? 1
        : route === "/diagnostic"
          ? 0.9
          : route === "/privacy"
            ? 0.3
            : 0.7,
  }));
}
