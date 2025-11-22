import { Code2, Smartphone, Database, Brain, Layout, BarChart, LucideIcon } from "lucide-react";

// 1. Interfaces
export interface LinkItem {
  type: "github" | "live" | "apk" | "lock";
  url: string;
  label?: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  categories: string[];
  status: "Concluído" | "Em andamento" | "Completed" | "In Progress";
  icon: LucideIcon;
  stats?: StatItem[];
  links?: LinkItem[];
}

interface Content {
  nav: {
    about: string;
    projects: string;
    contact: string;
    action: string;
    back: string;
  };
  hero: {
    status: string;
    greeting: string;
    name: string;
    role: string;
    description: string;
    current_focus: string;
    focus_list: string[];
    terminal_desc: string;
  };
  skills: string[];
  projectsSection: {
    title: string;
    subtitle: string;
    viewAll: string;
    searchPlaceholder: string;
    filterAll: string;
    filters: string[];
  };
  projects: Project[];
}

// 2. Dados (PT e EN)
export const content: { pt: Content; en: Content } = {
  pt: {
    nav: {
      about: "/#about",
      projects: "/projects",
      contact: "/#contact",
      action: "INICIAR_IA",
      back: "Voltar",
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
    projectsSection: {
      title: "Projetos em Destaque",
      subtitle: "Uma seleção de aplicações de alto impacto e modelos de IA.",
      viewAll: "Ver todos os projetos",
      searchPlaceholder: "Buscar por tecnologia ou nome...",
      filterAll: "Todos",
      filters: ["Todos", "Full Stack", "Data Science", "Mobile"], 
    },
    projects: [
      {
        slug: "renaveh-ma",
        title: "Sistema de Notificação Hospitalar (RENAVEH)",
        shortDesc: "Sistema robusto em Laravel/MySQL com 2FA e RBAC. Processa 50k registros e atende 98 hospitais.",
        fullDesc: "O RENAVEH-MA (Sistema de Informação da Rede Nacional de Vigilância Epidemiológica Hospitalar) foi implantado como subsistema estratégico. Ele não se limita a notificações compulsórias, mas objetiva a detecção e resposta imediata a Emergências de Saúde Pública (ESP). O sistema conta com controle de acesso rigoroso (RBAC) e autenticação de dois fatores (2FA).",
        tags: ["Laravel", "MySQL", "JavaScript"],
        categories: ["Full Stack"],
        status: "Concluído",
        icon: Database,
        stats: [
          { label: "Registros", value: "+50k" },
          { label: "Hospitais", value: "98" },
          { label: "Impacto", value: "Estadual" }
        ],
        links: [
          { type: "live", url: "https://renaveh.saude.ma.gov.br/" },
          { type: "lock", url: "#", label: "Código Confidencial" }
        ]
      },
      {
        slug: "maranhao-livre-da-fome",
        title: "Programa Maranhão Livre da Fome",
        shortDesc: "Plataforma de acompanhamento de 400 mil beneficiários em 217 cidades.",
        fullDesc: "Plataforma oficial para acompanhamento das consultas e benefícios do programa. O sistema gerencia uma base de dados massiva cobrindo todas as cidades do estado, garantindo integridade dos dados e acesso restrito a técnicos autorizados.",
        tags: ["Laravel", "MySQL", "JavaScript"],
        categories: ["Full Stack"],
        status: "Concluído",
        icon: Layout,
        stats: [
          { label: "Beneficiários", value: "400k" },
          { label: "Cidades", value: "217" },
          { label: "Escala", value: "Massiva" }
        ],
        links: [
          { type: "live", url: "https://maranhaolivredafome.saude.ma.gov.br/" },
          { type: "lock", url: "#", label: "Código Confidencial" }
        ]
      },
      {
        slug: "plandox",
        title: "Plandox",
        shortDesc: "Modernização de legado para microsserviços com IA para controle de qualidade.",
        fullDesc: "Migração de arquitetura monolítica para microsserviços. Utiliza modelos de ML para predição de qualidade de biodiesel via Design of Experiments (DoE).",
        tags: ["React Native", "FastAPI", "Microservices", "Python"],
        categories: ["Mobile", "Full Stack", "Data Science"],
        status: "Em andamento",
        icon: Code2,
        links: [
          { type: "lock", url: "#", label: "Código Privado" }
        ]
      },
      {
        slug: "analise-rfm-ml",
        title: "Segmentação de Clientes RFM com IA",
        shortDesc: "Pipeline completo de Machine Learning para classificar clientes em 5 clusters estratégicos.",
        fullDesc: "Sistema desenvolvido em Python utilizando análise RFM (Recency, Frequency, Monetary) com Machine Learning. Classifica clientes em grupos como 'Super Campeões', 'Em Risco' e 'VIPs' para estratégias de marketing direcionadas. Inclui interface web em Flask.",
        tags: ["Python", "Machine Learning", "Scikit-learn", "Flask"],
        categories: ["Data Science"],
        status: "Concluído",
        icon: Brain,
        stats: [
          { label: "Precisão", value: "Alta" },
          { label: "Clusters", value: "5" },
          { label: "Pipeline", value: "Automático" }
        ],
        links: [
          { type: "github", url: "https://github.com/josevbrito/online-retail-rfm-analysis" }
        ]
      },
      {
        slug: "monitora-saude",
        title: "Monitora Saúde (BI)",
        shortDesc: "Plataforma de transparência com mais de 50 dashboards interativos em Power BI.",
        fullDesc: "Portal de Transparência de Saúde do Maranhão. Ferramenta vital para gestores e população, permitindo monitoramento de indicadores de saúde e processos em tempo real para suporte à tomada de decisão.",
        tags: ["Power BI", "Laravel", "PostgreSQL"],
        categories: ["Full Stack"],
        status: "Concluído",
        icon: BarChart,
        stats: [
          { label: "Dashboards", value: "+50" },
          { label: "Fonte de Dados", value: "Híbrida" }
        ],
        links: []
      },
      {
        slug: "hans-plus",
        title: "Hans+",
        shortDesc: "App mobile premiado (Nota 10) para auxílio no tratamento da hanseníase.",
        fullDesc: "Aplicação focada no paciente, permitindo cadastro de sintomas e controle de medicação diária. Desenvolvido com foco em UX e simplicidade de uso.",
        tags: ["Flutter", "Firebase", "NoSQL", "Mobile"],
        categories: ["Mobile"],
        status: "Concluído",
        icon: Smartphone,
        links: [
          { type: "apk", url: "#", label: "APK Disponível" }
        ]
      },
      {
        slug: "california-housing",
        title: "Predição Imobiliária (Califórnia)",
        shortDesc: "Pipeline de ML para predição de preços imobiliários com otimização de hiperparâmetros.",
        fullDesc: "Desenvolvimento de sistema completo de predição. Inclui comparação de algoritmos, pré-processamento, validação de modelos e métricas de performance.",
        tags: ["Python", "ML Pipeline", "Pandas"],
        categories: ["Data Science"],
        status: "Concluído",
        icon: Code2,
        links: [
          { type: "github", url: "https://github.com/josevbrito/california-housing-ml-pipeline" }
        ]
      }
    ]
  },
  en: {
    nav: {
      about: "/#about",
      projects: "/projects",
      contact: "/#contact",
      action: "INITIATE_AI",
      back: "Back",
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
    projectsSection: {
      title: "Featured Projects",
      subtitle: "A selection of high-impact applications and AI models.",
      viewAll: "View all projects",
      searchPlaceholder: "Search by tech or name...",
      filterAll: "All",
      filters: ["All", "Full Stack", "Data Science", "Mobile"],
    },
    projects: [
      {
        slug: "renaveh-ma",
        title: "Hospital Notification System (RENAVEH)",
        shortDesc: "Robust Laravel/MySQL system with 2FA and RBAC. Processes 50k records and serves 98 hospitals.",
        fullDesc: "RENAVEH-MA (National Hospital Epidemiological Surveillance System Information - Maranhão) was implemented as a strategic subsystem. It is not limited to compulsory notifications but aims at the detection and immediate response to Public Health Emergencies (PHE). The system features strict access control (RBAC) and two-factor authentication (2FA).",
        tags: ["Laravel", "MySQL", "JavaScript"],
        categories: ["Full Stack"],
        status: "Completed",
        icon: Database,
        stats: [
          { label: "Records", value: "+50k" },
          { label: "Hospitals", value: "98" },
          { label: "Impact", value: "Statewide" }
        ],
        links: [
          { type: "live", url: "https://renaveh.saude.ma.gov.br/" },
          { type: "lock", url: "#", label: "Confidential Code" }
        ]
      },
      {
        slug: "maranhao-livre-da-fome",
        title: "Maranhão Hunger-Free Program",
        shortDesc: "Monitoring platform for 400k beneficiaries across 217 cities.",
        fullDesc: "Official platform for tracking consultations and benefits of the program. The system manages a massive database covering all cities in the state, ensuring data integrity and restricted access to authorized technicians.",
        tags: ["Laravel", "MySQL", "JavaScript"],
        categories: ["Full Stack"],
        status: "Completed",
        icon: Layout,
        stats: [
          { label: "Beneficiaries", value: "400k" },
          { label: "Cities", value: "217" },
          { label: "Scale", value: "Massive" }
        ],
        links: [
          { type: "live", url: "https://maranhaolivredafome.saude.ma.gov.br/" },
          { type: "lock", url: "#", label: "Confidential Code" }
        ]
      },
      {
        slug: "plandox",
        title: "Plandox",
        shortDesc: "Modernization from legacy to microservices with AI for quality control.",
        fullDesc: "Migration from monolithic architecture to microservices. Uses ML models for biodiesel quality prediction via Design of Experiments (DoE).",
        tags: ["React Native", "FastAPI", "Microservices", "Python"],
        categories: ["Mobile", "Full Stack", "Data Science"],
        status: "In Progress",
        icon: Code2,
        links: [
          { type: "lock", url: "#", label: "Private Code" }
        ]
      },
      {
        slug: "analise-rfm-ml",
        title: "AI-Powered RFM Customer Segmentation",
        shortDesc: "Complete Machine Learning pipeline to classify customers into 5 strategic clusters.",
        fullDesc: "System developed in Python using RFM analysis (Recency, Frequency, Monetary) with Machine Learning. Classifies customers into groups such as 'Champions', 'At Risk', and 'VIPs' for targeted marketing strategies. Includes a Flask web interface.",
        tags: ["Python", "Machine Learning", "Scikit-learn", "Flask"],
        categories: ["Data Science"],
        status: "Completed",
        icon: Brain,
        stats: [
          { label: "Precision", value: "High" },
          { label: "Clusters", value: "5" },
          { label: "Pipeline", value: "Automated" }
        ],
        links: [
          { type: "github", url: "https://github.com/josevbrito/online-retail-rfm-analysis" }
        ]
      },
      {
        slug: "monitora-saude",
        title: "Health Monitor (BI)",
        shortDesc: "Transparency platform with over 50 interactive Power BI dashboards.",
        fullDesc: "Maranhão Health Transparency Portal. A vital tool for managers and the population, allowing real-time monitoring of health indicators and processes to support decision-making.",
        tags: ["Power BI", "Laravel", "PostgreSQL"],
        categories: ["Full Stack"],
        status: "Completed",
        icon: BarChart,
        stats: [
          { label: "Dashboards", value: "+50" },
          { label: "Data Source", value: "Hybrid" }
        ],
        links: []
      },
      {
        slug: "hans-plus",
        title: "Hans+",
        shortDesc: "Award-winning mobile app (Grade 10) to assist in leprosy treatment.",
        fullDesc: "Patient-focused application allowing symptom registration and daily medication control. Developed with a focus on UX and simplicity of use.",
        tags: ["Flutter", "Firebase", "NoSQL", "Mobile"],
        categories: ["Mobile"],
        status: "Completed",
        icon: Smartphone,
        links: [
          { type: "apk", url: "#", label: "APK Available" }
        ]
      },
      {
        slug: "california-housing",
        title: "Real Estate Prediction (California)",
        shortDesc: "ML pipeline for real estate price prediction with hyperparameter optimization.",
        fullDesc: "Development of a complete prediction system. Includes algorithm comparison, pre-processing, model validation, and performance metrics.",
        tags: ["Python", "ML Pipeline", "Pandas"],
        categories: ["Data Science"],
        status: "Completed",
        icon: Code2,
        links: [
          { type: "github", url: "https://github.com/josevbrito/california-housing-ml-pipeline" }
        ]
      }
    ]
  }
};