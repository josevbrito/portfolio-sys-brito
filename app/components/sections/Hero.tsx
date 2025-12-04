  "use client";

import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Hero() {
  const { t, lang } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 pt-36 pb-20 px-6">
      {/* Lado Esquerdo: Texto */}
      <div className="flex-1 space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-mono tracking-wider"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
           {t.hero.status}
        </motion.div>

        <div className="space-y-2">
          <h2 className="text-xl text-gray-400 font-mono">{t.hero.greeting}</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            {t.hero.name}
          </h1>
          <h3 className="text-2xl md:text-3xl text-primary text-glow font-medium pt-2">
            {t.hero.role}
          </h3>
        </div>
        
        <motion.p 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.2 }}
           className="text-lg text-gray-400 max-w-lg leading-relaxed"
        >
          {t.hero.description}
        </motion.p>
        <div className="flex items-center gap-4 pt-2 text-gray-500">
          <Code2 size={24} className="text-primary/80" />
          <div className="h-1 w-1 bg-gray-700 rounded-full"></div>
          <span className="font-mono text-sm text-gray-300">
            {t.skills.join(" • ")}
          </span>
        </div>

        <div className="flex gap-4 pt-4">
          <a href="https://github.com/josevbrito" target="_blank" className="p-3 bg-surface border border-white/10 rounded-lg hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,220,130,0.2)] transition-all hover:-translate-y-1">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/josevbrito/" target="_blank" className="p-3 bg-surface border border-white/10 rounded-lg hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,220,130,0.2)] transition-all hover:-translate-y-1">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${t.contact.email}`} className="p-3 bg-surface border border-white/10 rounded-lg hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,220,130,0.2)] transition-all hover:-translate-y-1">
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Lado Direito: Terminal Interativo */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 w-full max-w-md relative"
      >
        <div className="absolute -inset-1 bg-primary/20 blur-3xl rounded-full opacity-20"></div>
        <div className="relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl border-glow backdrop-blur-sm">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50 hover:bg-red-500 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50 hover:bg-yellow-500 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50 hover:bg-green-500 transition-colors"></div>
            </div>
            <div className="text-[10px] font-mono text-gray-500">bash — sys.brito</div>
          </div>
          <div className="p-6 space-y-5 font-mono text-sm min-h-[300px]">
            <div>
              <div className="flex gap-2 text-gray-400 mb-1">
                <span className="text-primary">➜</span>
                <span>~ whoami</span>
              </div>
              <div className="text-gray-300 pl-5 border-l-2 border-white/10">
                "{t.hero.terminal_desc}"
              </div>
            </div>
            <div>
              <div className="flex gap-2 text-gray-400 mb-1">
                <span className="text-primary">➜</span>
                <span>~ {t.hero.current_focus}</span>
              </div>
              <div className="pl-5 grid gap-1">
                  {t.hero.focus_list.map((item: string, i: number) => (
                    <span key={i} className="text-primary/90 flex items-center gap-2">
                      <span className="text-[10px] opacity-50">▶</span> {item}
                    </span>
                  ))}
              </div>
            </div>
            <div className="pt-2">
                <div className="flex gap-2 text-gray-400">
                <span className="text-primary">➜</span>
                <span className="text-white">sh init_ai_agent.sh</span>
                <span className="animate-pulse bg-primary w-2.5 h-5 block ml-1"></span>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] opacity-20"></div>
        </div>
      </motion.div>
    </div>
  );
}