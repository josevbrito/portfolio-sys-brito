import { Code2, Smartphone, Database, Brain, Layout } from "lucide-react";

export const content = {
  pt: {
    nav: {
      about: "/sobre",
      projects: "/projetos",
      contact: "/contato",
      action: "INICIAR_IA",
    },
    hero: {
      status: "SISTEMA ONLINE",
      greeting: "Olá, eu sou",
      name: "José Brito.",
      role: "Engenheiro de Software & Cientista de Dados",
      description: "Especialista em transformar dados complexos em aplicações robustas. Foco em arquiteturas escaláveis, Full Stack (Laravel/Next.js) e Inteligência Artificial aplicada.",
      current_focus: "Foco atual",
      focus_list: ["Sistemas de Alta Escala", "Agentes de IA", "Ciência de Dados"],
      terminal_desc: "Desenvolvedor Full Stack apaixonado por inovação no setor público e privado."
    },
    skills: ["Next.js", "Laravel", "Python (AI)", "PostgreSQL"],
    projects: {
      title: "Projetos Selecionados",
      subtitle: "Arquitetura de Software • Inteligência Artificial • Mobile",
      items: [
        {
          title: "Plandox",
          desc: "Modernização de sistema monolítico para microsserviços. Backend em Python (FastAPI) com modelos de ML para controle de qualidade de biodiesel.",
          tags: ["Python", "FastAPI", "React Native", "Machine Learning"],
          icon: Brain,
          link: "#"
        },
        {
          title: "Sistema de Notificação Hospitalar",
          desc: "Sistema robusto em Laravel/MySQL com 2FA e RBAC. Processa 40k registros anuais e é utilizado em mais de 100 hospitais.",
          tags: ["Laravel", "MySQL", "PHP", "Segurança"],
          icon: Database,
          link: "#"
        },
        {
          title: "Hans+",
          desc: "Aplicação mobile premiada (nota 10 no TCC) para auxiliar no tratamento da hanseníase. Foco em UX e persistência de dados offline.",
          tags: ["Flutter", "Firebase", "NoSQL", "Mobile"],
          icon: Smartphone,
          link: "#"
        },
        {
          title: "Portal ReACT",
          desc: "Blog e portal de notícias para a Rede de Aplicação de Ciência e Tecnologia da UFMA. SSR e alta performance.",
          tags: ["Next.js", "Nest.js", "TypeScript"],
          icon: Layout,
          link: "#"
        },
        {
          title: "Predição Imobiliária (Califórnia)",
          desc: "Pipeline completo de Machine Learning para predição de preços de imóveis, desde a limpeza de dados até a implementação do modelo.",
          tags: ["Python", "Scikit-learn", "Pandas", "Data Science"],
          icon: Code2,
          link: "#"
        }
      ]
    }
  },
  en: {
    nav: {
      about: "/about",
      projects: "/projects",
      contact: "/contact",
      action: "INITIATE_AI",
    },
    hero: {
      status: "SYSTEM ONLINE",
      greeting: "Hello, I am",
      name: "José Brito.",
      role: "Software Engineer & Data Scientist",
      description: "Specialist in transforming complex data into robust applications. Focused on scalable architectures, Full Stack (Laravel/Next.js), and applied Artificial Intelligence.",
      current_focus: "Current Focus",
      focus_list: ["High Scale Systems", "AI Agents", "Data Science"],
      terminal_desc: "Full Stack Developer passionate about innovation in public and private sectors."
    },
    skills: ["Next.js", "Laravel", "Python (AI)", "PostgreSQL"],
    projects: {
      title: "Selected Projects",
      subtitle: "Software Architecture • Artificial Intelligence • Mobile",
      items: [
        {
          title: "Plandox",
          desc: "Modernization from monolithic to microservices. Python (FastAPI) backend with ML models for biodiesel quality control.",
          tags: ["Python", "FastAPI", "React Native", "Machine Learning"],
          icon: Brain,
          link: "#"
        },
        {
          title: "Hospital Notification System",
          desc: "Robust Laravel/MySQL system with 2FA and RBAC. Processes 40k annual records and is deployed in over 100 hospitals.",
          tags: ["Laravel", "MySQL", "PHP", "Security"],
          icon: Database,
          link: "#"
        },
        {
          title: "Hans+",
          desc: "Award-winning mobile app (top grade) assisting leprosy treatment. Focus on UX and offline data persistence.",
          tags: ["Flutter", "Firebase", "NoSQL", "Mobile"],
          icon: Smartphone,
          link: "#"
        },
        {
          title: "ReACT Portal",
          desc: "News portal and blog for UFMA's Science and Technology Network. SSR and high performance.",
          tags: ["Next.js", "Nest.js", "TypeScript"],
          icon: Layout,
          link: "#"
        },
        {
          title: "California Housing Prediction",
          desc: "Complete Machine Learning pipeline for real estate price prediction, from data cleaning to model implementation.",
          tags: ["Python", "Scikit-learn", "Pandas", "Data Science"],
          icon: Code2,
          link: "#"
        }
      ]
    }
  }
};