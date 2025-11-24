"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Terminal } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Navbar } from "../components/Navbar";

export default function ExperiencePage() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState<"all" | "work" | "education">("all");

  const filteredTimeline = t.timeline.filter(item => 
    filter === "all" ? true : item.type === filter
  );

  return (
    <div className="min-h-screen bg-matrix-gradient text-foreground font-sans selection:bg-primary selection:text-black">
      
      <Navbar />

      <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        
        {/* Header Tech */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
          <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                  {t.experienceSection.title}
              </h1>
              <p className="text-gray-400 max-w-xl font-mono text-sm border-l-2 border-primary/30 pl-4">
                  {t.experienceSection.subtitle}
              </p>
          </div>

          {/* Filtros */}
          <div className="flex p-1 bg-white/5 rounded-lg border border-white/10">
            {[
              { id: "all", label: lang === "pt" ? "Todos" : "All" },
              { id: "work", label: lang === "pt" ? "Profissional" : "Work" },
              { id: "education", label: lang === "pt" ? "Acadêmico" : "Education" }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`px-4 py-2 rounded text-xs font-mono uppercase tracking-wider transition-all ${
                  filter === btn.id 
                    ? "bg-primary text-black font-bold shadow-[0_0_10px_rgba(0,220,130,0.4)]" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8 pl-8 md:pl-0">
          
          {/* Linha de Circuito */}
          <div className="absolute left-0 top-4 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:left-8"></div>

          {filteredTimeline.map((item: any, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-20"
            >
              {/* Nó do Circuito */}
              <div className="absolute left-[-5px] md:left-[27px] top-6 w-3 h-3 bg-[#0a0a0a] border border-primary z-10 rotate-45 group-hover:bg-primary transition-colors"></div>
              
              {/* Linha conectora horizontal */}
              <div className="absolute left-0 md:left-8 top-[29px] w-8 md:w-12 h-[1px] bg-primary/30"></div>

              {/* Card Principal */}
              <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-r-xl rounded-bl-xl hover:border-primary/40 transition-all group relative overflow-hidden">
                
                {/* Efeito de "Scanline" no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors flex items-center gap-3">
                            {item.title}
                        </h3>
                        <span className="text-xs font-mono text-primary/80 bg-primary/5 px-3 py-1 rounded border border-primary/10 flex items-center gap-2 w-fit">
                            <Terminal size={12} />
                            {item.date}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-mono text-gray-400 mb-4 border-b border-white/5 pb-4">
                        {item.type === "work" ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                        <span className="uppercase tracking-wide">{item.org}</span>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base border-l-2 border-white/5 pl-4">
                        {item.desc}
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}