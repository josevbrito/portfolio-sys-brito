"use client";

import { Terminal, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#050505] pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Lado Esquerdo: Marca e Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 font-mono text-gray-400 text-sm">
            <Terminal size={16} className="text-primary" />
            <span>sys.brito</span>
          </div>
          <p className="text-xs text-gray-600 font-mono">
            © {currentYear} José Brito. {t.footer.rights}
          </p>
        </div>

        {/* Lado Direito: Tech Stack e Links */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            <a href="https://github.com/josevbrito" target="_blank" className="text-gray-500 hover:text-primary transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/josevbrito/" target="_blank" className="text-gray-500 hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:contact@josevbrito.com" className="text-gray-500 hover:text-primary transition-colors">
              <Mail size={18} />
            </a>
          </div>
          <p className="text-[10px] text-gray-700 font-mono">
            {t.footer.built}
          </p>
        </div>

      </div>
    </footer>
  );
}