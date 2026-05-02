"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import ptMessages from "../../messages/pt.json";
import enMessages from "../../messages/en.json";

type Language = "pt" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
}

const messages = { pt: ptMessages, en: enMessages };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("pt");

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio-lang") as Language;
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "pt" ? "en" : "pt";
    setLang(newLang);
    localStorage.setItem("portfolio-lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      <NextIntlClientProvider locale={lang} messages={messages[lang]}>
        {children}
      </NextIntlClientProvider>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
