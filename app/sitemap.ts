import type { MetadataRoute } from "next";
import { getProjects } from "@/app/data/projects";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://josevbrito.com";

/** "" for the default locale (PT stays at the root), "/en" for the others. */
function prefix(locale: string) {
  return locale === routing.defaultLocale ? "" : `/${locale}`;
}

/** hreflang map pointing at every locale's copy of the same path. */
function alternates(path: string) {
  return {
    languages: Object.fromEntries(
      routing.locales.map((l) => [l, `${BASE_URL}${prefix(l)}${path}` || BASE_URL]),
    ),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const projectSlugs = getProjects(routing.defaultLocale).map((p) => p.slug);
  const lastModified = new Date();

  const paths = [
    { path: "",            priority: 1 },
    { path: "/projects",   priority: 0.8 },
    { path: "/experience", priority: 0.7 },
    ...projectSlugs.map((slug) => ({ path: `/projects/${slug}`, priority: 0.6 })),
  ];

  return routing.locales.flatMap((locale) =>
    paths.map(({ path, priority }) => ({
      url:             `${BASE_URL}${prefix(locale)}${path}` || BASE_URL,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
      alternates:      alternates(path),
    })),
  );
}
