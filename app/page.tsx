"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Code2, Cpu, ChevronRight, Github, Linkedin, Mail, Globe } from "lucide-react";
import { content } from "./data";

export default function Home() {
  // Estado para controlar o idioma ('pt' ou 'en')
  const [lang, setLang] = useState<"pt" | "en">("pt");
  
  // Pega o conteúdo baseado no idioma atual
  const t = content[lang];

  const toggleLanguage = () => {
    setLang(prev => prev === "pt" ? "en" : "pt");
  };

  return (
    <div className="min-h-screen bg-matrix-gradient text-foreground font-sans selection:bg-primary selection:text-black overflow-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-2 font-mono text-primary text-glow font-bold text-lg cursor-pointer group">
            <Terminal size={20} className="group-hover:rotate-12 transition-transform" />
            <span>sys.brito</span>
            <span className="animate-pulse">_</span>
          </div>

          {/* Links e Controles */}
          <div className="flex items-center gap-6">
            
            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
              <a href="#about" className="hover:text-primary hover:text-glow transition-all">{t.nav.about}</a>
              <a href="#projects" className="hover:text-primary hover:text-glow transition-all">{t.nav.projects}</a>
              <a href="#contact" className="hover:text-primary hover:text-glow transition-all">{t.nav.contact}</a>
            </div>

            {/* Separador */}
            <div className="h-4 w-[1px] bg-white/10 hidden md:block"></div>

            {/* TOGGLE DE IDIOMA */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-xs font-mono border border-white/10 bg-white/5 px-3 py-1.5 rounded hover:border-primary/50 hover:text-primary transition-all"
            >
              <Globe size={12} />
              <span>{lang === "pt" ? "EN" : "PT-BR"}</span>
            </button>

            {/* Botão de Ação */}
            <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-surface border border-white/10 rounded hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all group">
              <span className="text-xs font-mono tracking-wide">{t.nav.action}</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="pt-36 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Lado Esquerdo: Texto */}
        <motion.div 
          key={lang}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-8"
        >
          {/* Badge "Online" */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-mono tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t.hero.status}
          </div>

          <div className="space-y-2">
            <h2 className="text-xl text-gray-400 font-mono">{t.hero.greeting}</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              {t.hero.name}
            </h1>
            <h3 className="text-2xl md:text-3xl text-primary text-glow font-medium pt-2">
              {t.hero.role}
            </h3>
          </div>
          
          <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
            {t.hero.description}
          </p>

          {/* Tech Stack Icons */}
          <div className="flex items-center gap-4 pt-2 text-gray-500">
            <Code2 size={24} className="text-primary/80" />
            <div className="h-1 w-1 bg-gray-700 rounded-full"></div>
            <span className="font-mono text-sm text-gray-300">
              {t.skills.join(" • ")}
            </span>
          </div>

          {/* Botões Sociais */}
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/josevbrito" target="_blank" className="p-3 bg-surface border border-white/10 rounded-lg hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,220,130,0.2)] transition-all hover:-translate-y-1">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/josevbrito/" target="_blank" className="p-3 bg-surface border border-white/10 rounded-lg hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,220,130,0.2)] transition-all hover:-translate-y-1">
              <Linkedin size={20} />
            </a>
            <a href="mailto:contact@josevbrito.com" className="p-3 bg-surface border border-white/10 rounded-lg hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,220,130,0.2)] transition-all hover:-translate-y-1">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Lado Direito: Terminal Interativo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-md relative"
        >
          {/* Efeito de fundo (Glow) */}
          <div className="absolute -inset-1 bg-primary/20 blur-3xl rounded-full opacity-20"></div>

          {/* O Terminal */}
          <div className="relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl border-glow backdrop-blur-sm">
            
            {/* Barra de Título do Terminal */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50 hover:bg-red-500 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50 hover:bg-yellow-500 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50 hover:bg-green-500 transition-colors"></div>
              </div>
              <div className="text-[10px] font-mono text-gray-500">bash — sys.brito</div>
            </div>

            {/* Conteúdo do Terminal */}
            <div className="p-6 space-y-5 font-mono text-sm min-h-[300px]">
              
              {/* Linha 1 */}
              <div>
                <div className="flex gap-2 text-gray-400 mb-1">
                  <span className="text-primary">➜</span>
                  <span>~ whoami</span>
                </div>
                <div className="text-gray-300 pl-5 border-l-2 border-white/10">
                  "{t.hero.terminal_desc}"
                </div>
              </div>

              {/* Linha 2 */}
              <div>
                <div className="flex gap-2 text-gray-400 mb-1">
                  <span className="text-primary">➜</span>
                  <span>~ {t.hero.current_focus}</span>
                </div>
                <div className="pl-5 grid gap-1">
                   {t.hero.focus_list.map((item, i) => (
                     <span key={i} className="text-primary/90 flex items-center gap-2">
                       <span className="text-[10px] opacity-50">▶</span> {item}
                     </span>
                   ))}
                </div>
              </div>

              {/* Linha 3 (Cursor Ativo) */}
              <div className="pt-2">
                 <div className="flex gap-2 text-gray-400">
                  <span className="text-primary">➜</span>
                  <span className="text-white">sh init_ai_agent.sh</span>
                  <span className="animate-pulse bg-primary w-2.5 h-5 block ml-1"></span>
                </div>
              </div>

            </div>
            
            {/* Scanlines Overlay (Efeito Retro) */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] opacity-20"></div>
          </div>
        </motion.div>
      </main>
      {/* --- SEÇÃO DE PROJETOS --- */}
      <section id="projects" className="py-20 px-6 bg-surface/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          
          {/* Título da Seção */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-primary">/</span> {t.projects.title}
            </h2>
            <p className="text-gray-400 mt-2 font-mono text-sm">
              {t.projects.subtitle}
            </p>
          </motion.div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.items.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors overflow-hidden"
              >
                {/* Efeito de Hover no Fundo */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Cabeçalho do Card */}
                <div className="relative z-10 flex justify-between items-start mb-4">
                  <div className="p-2 bg-white/5 rounded-lg text-primary group-hover:text-white group-hover:bg-primary transition-colors">
                    <project.icon size={24} />
                  </div>
                  <div className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">
                    CONFIDENTIAL
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}