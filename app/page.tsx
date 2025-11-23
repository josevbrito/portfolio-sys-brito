"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, ChevronRight, Github, Linkedin, Mail, Copy, Check, Send, Loader2, AlertCircle } from "lucide-react";
import { useLanguage } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Project } from "./data"; 

export default function Home() {
  const { t, lang } = useLanguage();

  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleCopy = () => {
    navigator.clipboard.writeText(t.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  async function handleSubmit(event: any) {
    event.preventDefault();
    setFormStatus("sending");

    const formData = new FormData(event.target);
    const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_URL; 

    if (!FORMSPREE_URL) {
        console.error("Formspree URL não configurada!");
        setFormStatus("error");
        return;
    }

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setFormStatus("success");
        event.target.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  }

  return (
    <div className="min-h-screen bg-matrix-gradient text-foreground font-sans selection:bg-primary selection:text-black overflow-hidden">
      
      <Navbar />

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
            <a href={`mailto:${t.contact.email}`} className="p-3 bg-surface border border-white/10 rounded-lg hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,220,130,0.2)] transition-all hover:-translate-y-1">
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
          {/* Efeito de fundo */}
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
                   {t.hero.focus_list.map((item: string, i: number) => (
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
            
            {/* Link para ver todos (Desktop) */}
            <a href="/projects" className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors font-mono text-sm group">
              {t.projectsSection.viewAll}
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Grid de Cards (Limitado a 3) */}
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
                
                {/* Header do Card*/}
                <div className="relative z-10 flex justify-between items-start mb-4 gap-4">
                  {/* Ícone */}
                  <div className="p-2 bg-white/5 rounded-lg text-primary group-hover:text-white group-hover:bg-primary transition-colors shrink-0">
                    <project.icon size={24} />
                  </div>

                  {/* Categorias */}
                  <div className="flex flex-wrap justify-end gap-2 max-w-[70%]">
                    {project.categories.map((cat: string) => (
                      <span 
                        key={cat} 
                        className="text-[10px] font-mono text-gray-400 border border-white/10 bg-black/40 px-2 py-1 rounded hover:border-primary/30 hover:text-primary transition-colors cursor-default"
                      >
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

          {/* Botão Mobile para ver todos */}
          <div className="mt-8 md:hidden flex justify-center">
             <a href="/projects" className="flex items-center gap-2 px-6 py-3 bg-surface border border-white/10 rounded hover:border-primary/50 text-white transition-all w-full justify-center">
              {t.projectsSection.viewAll}
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO DE CONTATO --- */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LADO ESQUERDO: Informações */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
                <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
                {t.contact.title} <span className="text-primary animate-pulse">_</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-md leading-relaxed">
                {t.contact.subtitle}
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-5 bg-surface border border-white/10 rounded-xl hover:border-primary/30 transition-colors group">
                    <div className="p-3 bg-white/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-black transition-all">
                        <Mail size={24} />
                    </div>
                    <div className="flex-1">
                        <p className="text-xs text-gray-500 font-mono mb-1 uppercase tracking-wider">{t.contact.emailLabel}</p>
                        <a href={`mailto:${t.contact.email}`} className="text-white font-medium hover:text-primary transition-colors text-lg">
                            {t.contact.email}
                        </a>
                    </div>
                    <button 
                        onClick={handleCopy} 
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors relative"
                        title={t.contact.copyEmail}
                    >
                        {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} className="text-gray-400 hover:text-white" />}
                    </button>
                </div>
            </div>

            <div>
                <p className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider">{t.contact.socialLabel}</p>
                <div className="flex gap-4">
                    <a href="https://linkedin.com/in/josevbrito/" target="_blank" className="flex items-center gap-2 px-5 py-3 bg-surface border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-primary hover:bg-white/5 transition-all group">
                        <Linkedin size={20} className="group-hover:text-primary transition-colors"/>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/josevbrito" target="_blank" className="flex items-center gap-2 px-5 py-3 bg-surface border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-primary hover:bg-white/5 transition-all group">
                        <Github size={20} className="group-hover:text-primary transition-colors"/>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
          </motion.div>

          {/* LADO DIREITO: Formulário com Formspree */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl relative"
          >
            <div className="absolute -top-1 -right-1 w-20 h-20 bg-primary/20 blur-3xl rounded-full opacity-20 pointer-events-none"></div>

            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4 relative z-10">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                </div>
                <span className="text-[10px] font-mono text-gray-600">email - sys.brito</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-mono text-primary/80 uppercase tracking-wider">
                            {t.contact.form.nameLabel}
                        </label>
                        <input 
                            type="text" 
                            name="name"
                            id="name"
                            required
                            placeholder={t.contact.form.namePlaceholder}
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-700 focus:border-primary focus:bg-black/60 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-sans"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-mono text-primary/80 uppercase tracking-wider">
                            {t.contact.form.emailLabel}
                        </label>
                        <input 
                            type="email" 
                            name="email"
                            id="email"
                            required
                            placeholder={t.contact.form.emailPlaceholder}
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-700 focus:border-primary focus:bg-black/60 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-sans"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-mono text-primary/80 uppercase tracking-wider">
                        {t.contact.form.messageLabel}
                    </label>
                    <textarea 
                        name="message"
                        id="message"
                        required
                        rows={5}
                        placeholder={t.contact.form.messagePlaceholder}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-700 focus:border-primary focus:bg-black/60 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none font-sans leading-relaxed"
                    ></textarea>
                </div>

                <button 
                    type="submit"
                    disabled={formStatus === "sending" || formStatus === "success"}
                    className={`w-full flex items-center justify-center gap-3 py-4 rounded-lg font-bold transition-all overflow-hidden relative group ${
                        formStatus === "success" 
                        ? "bg-green-500/10 text-green-500 border border-green-500/50 cursor-default"
                        : formStatus === "error"
                        ? "bg-red-500/10 text-red-500 border border-red-500/50"
                        : "bg-primary text-black hover:bg-primary-glow hover:scale-[1.01] border border-transparent"
                    }`}
                >
                    {formStatus === "idle" && (
                        <>
                            {t.contact.form.sendButton} 
                            <Send size={18} className="group-hover:translate-x-1 transition-transform"/>
                        </>
                    )}
                    {formStatus === "sending" && (
                        <>
                            <Loader2 size={20} className="animate-spin" />
                            <span>{t.contact.form.sending}</span>
                        </>
                    )}
                    {formStatus === "success" && (
                        <>
                            <Check size={20} />
                            <span>{t.contact.form.successMessage}</span>
                        </>
                    )}
                    {formStatus === "error" && (
                        <>
                            <AlertCircle size={20} />
                            <span>{t.contact.form.errorMessage}</span>
                        </>
                    )}
                </button>
            </form>
          </motion.div>

        </div>
      </section>
    </div>
  );
}