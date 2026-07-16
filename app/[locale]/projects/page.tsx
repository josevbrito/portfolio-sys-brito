"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Search } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/app/components/Navbar";
import { getProjects } from "@/app/data/projects";
import { getTechColor } from "@/app/utils/techColors";

export default function ProjectsPage() {
  const t = useTranslations("projectsSection");
  const lang = useLocale() as Locale;
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);
  const [search, setSearch] = useState("");

  const filters = t.raw("filters") as string[];
  const projects = getProjects(lang);

  const currentFilterLabel = filters[activeFilterIndex];

  const filteredProjects = projects.filter((p) => {
    const isAll = activeFilterIndex === 0;
    const hasCategory = p.categories.includes(currentFilterLabel);
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
    return (isAll || hasCategory) && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-matrix-gradient text-foreground font-sans selection:bg-primary selection:text-black">

      <Navbar />

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">

        {/* Header da Página */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">{t("title")}</h1>
          <p className="text-gray-400 max-w-2xl">{t("subtitle")}</p>
        </div>

        {/* Controles (Busca e Filtro) */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          {/* Busca */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          {/* Filtros Dinâmicos */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {filters.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveFilterIndex(index)}
                className={`px-4 py-2 rounded-lg text-sm font-mono whitespace-nowrap border transition-all ${
                  activeFilterIndex === index
                    ? "bg-primary/10 border-primary text-primary"
                    : "bg-surface border-white/10 text-gray-400 hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Resultados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors flex flex-col"
            >
              <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-20"></Link>

              {/* Header do Card */}
              <div className="relative z-10 flex justify-between items-start mb-4 gap-4">
                {/* Ícone */}
                <div className="p-2 bg-white/5 rounded-lg text-primary group-hover:text-white group-hover:bg-primary transition-colors shrink-0">
                  <project.icon size={24} />
                </div>

                {/* Categorias */}
                <div className="flex flex-wrap justify-end gap-2 max-w-[70%]">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="text-[10px] font-mono text-gray-400 border border-white/10 bg-black/40 px-2 py-1 rounded hover:border-primary/30 hover:text-primary transition-colors cursor-default"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors relative z-10">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1 relative z-10">
                {project.shortDesc}
              </p>

              <div className="flex flex-wrap gap-2 relative z-10">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-1 rounded border" style={getTechColor(tag)}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
