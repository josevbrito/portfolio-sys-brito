import type { Metadata } from "next";
import { getProjects } from "@/app/data/projects";
import ProjectDetailsClient from "./ProjectDetailsClient";

const BASE_URL = "https://josevbrito.com";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjects("pt").find((p) => p.slug === slug);

  if (!project) {
    return { title: "Projeto não encontrado" };
  }

  const url = `${BASE_URL}/projects/${slug}`;

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
    },
  };
}

export default function ProjectPage() {
  return <ProjectDetailsClient />;
}
