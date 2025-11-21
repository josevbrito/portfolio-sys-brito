"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { content } from "../data";

type Language = "pt" | "en";
type ContentType = typeof content.pt;

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: ContentType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("pt");

  // Tenta recuperar a escolha do usuário do LocalStorage ao iniciar
  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio-lang") as Language;
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "pt" ? "en" : "pt";
    setLang(newLang);
    localStorage.setItem("portfolio-lang", newLang); // Salva a escolha
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t: content[lang] }}>
      {children}
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