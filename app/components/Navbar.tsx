"use client";

import { Terminal, Globe, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { usePathname } from "next/navigation";

export function Navbar() {
  const { t, lang, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo ou Botão Voltar */}
        <div className="flex items-center gap-4">
          {!isHome && (
            <Link href="/" className="flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-primary transition-colors mr-2">
              <ArrowLeft size={16} />
              {t.nav.back}
            </Link>
          )}
          
          <Link href="/" className="flex items-center gap-2 font-mono text-primary text-glow font-bold text-lg cursor-pointer group">
            <Terminal size={20} className="group-hover:rotate-12 transition-transform" />
            <span>sys.brito</span>
            <span className="animate-pulse">_</span>
          </Link>
        </div>

        {/* Links e Controles */}
        <div className="flex items-center gap-6">
          
          {/* Menu Desktop (Só mostra na Home) */}
          {isHome && (
            <>
              <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
                <a href="#about" className="hover:text-primary hover:text-glow transition-all">{t.nav.about}</a>
                <a href="#projects" className="hover:text-primary hover:text-glow transition-all">{t.nav.projects}</a>
                <a href="#contact" className="hover:text-primary hover:text-glow transition-all">{t.nav.contact}</a>
              </div>
              <div className="h-4 w-[1px] bg-white/10 hidden md:block"></div>
            </>
          )}

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
  );
}