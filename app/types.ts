import { LucideIcon } from "lucide-react";

export interface LinkItem {
  type: "github" | "live" | "apk" | "lock";
  url: string;
  label?: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  categories: string[];
  status: "Concluído" | "Em andamento" | "Completed" | "In Progress";
  icon: LucideIcon;
  images?: string[];
  stats?: StatItem[];
  links?: LinkItem[];
}

export interface TimelineItem {
  date: string;
  title: string;
  org: string;
  desc: string;
  type: "work" | "education";
}
