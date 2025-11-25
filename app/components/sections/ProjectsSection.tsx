"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { Project } from "../../data";

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 px-6 bg-surface/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex justify-between items-end"
        >
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-primary">/</span> {t.projectsSection.title}
            </h2>
            <p className="text-gray-400 mt-2 font-mono text-sm">
              {t.projectsSection.subtitle}
            </p>
          </div>
          <a href="/projects" className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors font-mono text-sm group">
            {t.projectsSection.viewAll}
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.slice(0, 3).map((project: Project, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors overflow-hidden flex flex-col"
            >
              <a href={`/projects/${project.slug}`} className="absolute inset-0 z-20"></a>
              <div className="relative z-10 flex justify-between items-start mb-4 gap-4">
                <div className="p-2 bg-white/5 rounded-lg text-primary group-hover:text-white group-hover:bg-primary transition-colors shrink-0">
                  <project.icon size={24} />
                </div>
                <div className="flex flex-wrap justify-end gap-2 max-w-[70%]">
                  {project.categories.map((cat: string) => (
                    <span key={cat} className="text-[10px] font-mono text-gray-400 border border-white/10 bg-black/40 px-2 py-1 rounded hover:border-primary/30 hover:text-primary transition-colors cursor-default">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="relative z-10 text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="relative z-10 text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3 flex-1">
                {project.shortDesc}
              </p>
              <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {project.tags.slice(0, 3).map((tag: string, i: number) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-[10px] font-mono px-2 py-1 text-gray-500">+{project.tags.length - 3}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden flex justify-center">
            <a href="/projects" className="flex items-center gap-2 px-6 py-3 bg-surface border border-white/10 rounded hover:border-primary/50 text-white transition-all w-full justify-center">
            {t.projectsSection.viewAll}
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}