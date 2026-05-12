import type { MetadataRoute } from "next";
import { guides } from "@/data/guides";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/protein-calculator", "/muscle-loss-risk", "/cost-comparison"];
  const guideRoutes = guides.map((guide) => `/guides/${guide.slug}`);

  return [...routes, ...guideRoutes].map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date("2026-05-12"),
    changeFrequency: route.includes("guides") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route.includes("guides") ? 0.75 : 0.9
  }));
}
