import type { MetadataRoute } from "next";
import { getProjects } from "@/app/data/projects";

const BASE_URL = "https://josevbrito.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectSlugs = getProjects("pt").map((p) => p.slug);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url:              BASE_URL,
      lastModified:     new Date(),
      changeFrequency:  "monthly",
      priority:         1,
    },
    {
      url:              `${BASE_URL}/projects`,
      lastModified:     new Date(),
      changeFrequency:  "monthly",
      priority:         0.8,
    },
    {
      url:              `${BASE_URL}/experience`,
      lastModified:     new Date(),
      changeFrequency:  "monthly",
      priority:         0.7,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url:              `${BASE_URL}/projects/${slug}`,
    lastModified:     new Date(),
    changeFrequency:  "monthly" as const,
    priority:         0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
