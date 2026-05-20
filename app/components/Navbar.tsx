"use client";

import { Terminal, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguage } from "../context/LanguageContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const languageOptions = {
  pt: { label: "PT-BR", flag: "🇧🇷" },
  en: { label: "EN", flag: "🇺🇸" },
};

export function Navbar() {
  const t = useTranslations("nav");
  const { lang, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const hasHistory = useRef(false);

  useEffect(() => {
    hasHistory.current = window.history.length > 1;
  }, []);

  const nextLang = lang === "pt" ? "en" : "pt";

  function handleBack() {
    if (hasHistory.current) {
      router.back();
    } else {
      router.push("/");
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo ou Botão Voltar */}
        <div className="flex items-center gap-4">
          {!isHome && (
            <button onClick={handleBack} className="flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-primary transition-colors mr-2">
              <ArrowLeft size={16} />
              {t("back")}
            </button>
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
                <a href="#experience" className="hover:text-primary hover:text-glow transition-all">{t("experience")}</a>
                <a href="#projects" className="hover:text-primary hover:text-glow transition-all">{t("projects")}</a>
                <a href="#contact" className="hover:text-primary hover:text-glow transition-all">{t("contact")}</a>
              </div>
              <div className="h-4 w-[1px] bg-white/10 hidden md:block"></div>
            </>
          )}

          {/* TOGGLE DE IDIOMA */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-xs font-mono border border-white/10 bg-white/5 px-3 py-1.5 rounded hover:border-primary/50 hover:text-primary transition-all"
            aria-label="Alterar idioma"
          >
            <span className="text-sm leading-none">{languageOptions[nextLang].flag}</span>
            <span>{languageOptions[nextLang].label}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
