"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Navbar } from "../components/Navbar"; 

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("Todos");
  const [search, setSearch] = useState("");

  // Lógica de Filtro
  const categories = ["Todos", "Full Stack", "Data Science", "Mobile"];
  
  const filteredProjects = t.projects.filter((p) => {
    const matchesCategory = filter === "Todos" || p.categories.includes(filter);
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

    return (
        <div className="min-h-screen bg-matrix-gradient text-foreground font-sans selection:bg-primary selection:text-black">
        
        <Navbar />

        <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            
            {/* Header da Página */}
            <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">{t.projectsSection.title}</h1>
            <p className="text-gray-400 max-w-2xl">{t.projectsSection.subtitle}</p>
            </div>

            {/* Controles (Busca e Filtro) */}
            <div className="flex flex-col md:flex-row gap-4 mb-12">
            {/* Busca */}
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                type="text" 
                placeholder={t.projectsSection.searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:border-primary focus:outline-none transition-colors"
                />
            </div>

            {/* Filtros (Desktop) */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-mono whitespace-nowrap border transition-all ${
                    filter === cat 
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
                <a href={`/projects/${project.slug}`} className="absolute inset-0 z-20"></a>
                
                <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="p-2 bg-white/5 rounded-lg text-primary">
                    <project.icon size={24} />
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">
                    {project.categories[0]}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors relative z-10">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1 relative z-10">
                    {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-2 relative z-10">
                    {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
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