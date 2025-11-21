"use client"; // ADICIONE ISSO NO TOPO

import { useLanguage } from "@/app/context/LanguageContext";
import { Navbar } from "@/app/components/Navbar";
import { Code2, ExternalLink, Github, Lock } from "lucide-react";
import { notFound, useParams } from "next/navigation";

export default function ProjectDetails() {
  const params = useParams();
  const slug = params.slug as string;
  const { t } = useLanguage();

  // Busca o projeto na lista do idioma ATUAL
  const project = t.projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="pt-32 text-center text-white">Projeto não encontrado.</div>;
  }

  return (
    <div className="min-h-screen bg-matrix-gradient text-foreground font-sans selection:bg-primary selection:text-black">
      
      <Navbar />

      <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        
        {/* Header do Projeto */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono border border-primary/20">
              {project.category}
            </span>
            {project.status === "Em andamento" && (
               <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-mono border border-yellow-500/20">
               Em Desenvolvimento
             </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{project.title}</h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            {project.fullDesc}
          </p>
        </div>

        {/* Grid de Informações */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Coluna Principal (Esquerda) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Placeholder de Galeria de Fotos */}
            <div className="aspect-video bg-surface border border-white/10 rounded-xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                <div className="text-center p-6">
                    <project.icon size={48} className="mx-auto text-gray-600 mb-4 group-hover:text-primary transition-colors" />
                    <p className="text-gray-500 font-mono text-sm">Galeria de imagens do projeto</p>
                    <p className="text-gray-600 text-xs mt-1">(Em breve)</p>
                </div>
            </div>

            {/* Tecnologias */}
            <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Code2 size={20} className="text-primary"/> Stack Tecnológico
                </h3>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 bg-surface border border-white/10 rounded text-sm text-gray-300 font-mono">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

          </div>

          {/* Coluna Lateral (Direita - Metadados) */}
          <div className="space-y-8">
            
            {/* Card de Links */}
            <div className="bg-surface border border-white/10 rounded-xl p-6">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Links</h3>
                <div className="space-y-3">
                    {project.links && project.links.length > 0 ? (
                        project.links.map((link, i) => (
                            <a 
                                key={i} 
                                href={link.url} 
                                target="_blank"
                                className={`flex items-center justify-between p-3 rounded border transition-all ${
                                    link.type === 'lock' 
                                    ? 'bg-red-500/5 border-red-500/20 text-red-400 cursor-not-allowed' 
                                    : 'bg-white/5 border-white/10 hover:border-primary hover:text-primary text-white'
                                }`}
                            >
                                <span className="text-sm font-medium flex items-center gap-2">
                                    {link.type === 'github' && <Github size={16} />}
                                    {link.type === 'lock' && <Lock size={16} />}
                                    {link.label || (link.type === 'github' ? 'Repositório' : 'Acessar Projeto')}
                                </span>
                                {link.type !== 'lock' && <ExternalLink size={14} />}
                            </a>
                        ))
                    ) : (
                        <div className="text-sm text-gray-500 italic">Sem links públicos disponíveis</div>
                    )}
                </div>
            </div>

            {/* Estatísticas */}
            {project.stats && (
                <div className="bg-surface border border-white/10 rounded-xl p-6">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Impacto & Dados</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {project.stats.map((stat, i) => (
                            <div key={i}>
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-xs text-gray-500 font-mono">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

          </div>
        </div>

      </main>
    </div>
  );
}