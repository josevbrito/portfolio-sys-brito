import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getProjects } from "@/app/data/projects";
import { routing, type Locale } from "@/i18n/routing";
import ProjectDetailsClient from "./ProjectDetailsClient";

const BASE_URL = "https://josevbrito.com";

type Props = { params: Promise<{ slug: string; locale: Locale }> };

/** "" for the default locale (PT stays at the root), "/en" for the others. */
function prefix(locale: string) {
  return locale === routing.defaultLocale ? "" : `/${locale}`;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getProjects(locale).map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const project = getProjects(locale).find((p) => p.slug === slug);

  if (!project) {
    return { title: locale === "en" ? "Project not found" : "Projeto não encontrado" };
  }

  const url = `${BASE_URL}${prefix(locale)}/projects/${slug}`;

  return {
    title: project.title,
    description: project.fullDesc,
    keywords: project.tags,
    openGraph: {
      type:        "article",
      url,
      title:       project.title,
      description: project.shortDesc,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card:        "summary_large_image",
      title:       project.title,
      description: project.shortDesc,
    },
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${BASE_URL}${prefix(l)}/projects/${slug}`]),
      ),
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProjectDetailsClient />;
}
