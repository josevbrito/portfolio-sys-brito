"use client";

import { Terminal, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { useEffect, useRef } from "react";

const languageOptions = {
  pt: { label: "PT-BR", flag: "/flags/br.svg" },
  en: { label: "EN", flag: "/flags/us.svg" },
};

let softNavCount = 0;
let lastLocale: string | null = null;
let lastNavKey: string | null = null;

export function Navbar() {
  const t = useTranslations("nav");
  const lang = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const cameFromSite = useRef(false);

  useEffect(() => {

    const navKey = `${lang}:${pathname}`;
    if (navKey === lastNavKey) return;

    const switchedLocale = lastLocale !== null && lastLocale !== lang;
    cameFromSite.current = softNavCount > 0 && !switchedLocale;
    softNavCount += 1;
    lastLocale = lang;
    lastNavKey = navKey;
  }, [pathname, lang]);

  const nextLang: Locale = lang === "pt" ? "en" : "pt";
  const parentPath = pathname.startsWith("/projects/") ? "/projects" : "/";

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo ou Botão Voltar */}
        <div className="flex items-center gap-4">
          {!isHome && (
            <Link
              href={parentPath}
              onClick={(e) => {
                if (cameFromSite.current) {
                  e.preventDefault();
                  router.back();
                }
              }}
              className="flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-primary transition-colors mr-2"
            >
              <ArrowLeft size={16} />
              {t("back")}
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
                <a href="#experience" className="hover:text-primary hover:text-glow transition-all">{t("experience")}</a>
                <a href="#projects" className="hover:text-primary hover:text-glow transition-all">{t("projects")}</a>
                <a href="#contact" className="hover:text-primary hover:text-glow transition-all">{t("contact")}</a>
              </div>
              <div className="h-4 w-[1px] bg-white/10 hidden md:block"></div>
            </>
          )}

          {/* TOGGLE DE IDIOMA */}
          <Link
            href={pathname}
            locale={nextLang}
            hrefLang={nextLang}
            replace
            className="flex items-center gap-2 text-xs font-mono border border-white/10 bg-white/5 px-3 py-1.5 rounded hover:border-primary/50 hover:text-primary transition-all"
            aria-label={t("changeLanguage", { lang: languageOptions[nextLang].label })}
          >
            <Image
              src={languageOptions[nextLang].flag}
              alt=""
              width={20}
              height={20}
              unoptimized
              priority
              className="shrink-0"
            />
            <span>{languageOptions[nextLang].label}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
