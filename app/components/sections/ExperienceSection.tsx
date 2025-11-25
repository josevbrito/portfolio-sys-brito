"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[#030303]"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row justify-between items-end gap-4"
        >
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-primary">/</span> {t.experienceSection.title}
            </h2>
            <p className="text-gray-400 mt-2 font-mono text-sm">
              {t.experienceSection.subtitle}
            </p>
          </div>
          
          <a href="/experience" className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors font-mono text-sm group">
            {t.experienceSection.viewAll}
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.timeline.slice(0, 3).map((item: any, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#0a0a0a] border border-white/10 p-6 rounded-xl hover:border-primary/50 hover:bg-white/5 transition-all flex flex-col justify-between h-full"
            >
              <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-primary/80 mb-3 uppercase tracking-wider border-b border-white/5 pb-3">
                  <span className="w-2 h-2 bg-primary/50 rounded-sm"></span>
                  {item.date}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-gray-500 mb-4">{item.org}</p>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 border-t border-white/5 pt-4 mt-auto">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden flex justify-center">
          <a 
            href="/experience" 
            className="flex items-center gap-2 px-6 py-3 bg-surface border border-white/10 rounded hover:border-primary/50 text-white transition-all w-full justify-center"
          >
            {t.experienceSection.viewAll}
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}