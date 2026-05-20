import { Code2, Smartphone, Database, Brain, Layout, BarChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Project, LinkItem, StatItem, GalleryImage } from "../../types";
import {
  monitoraImages, masemfomeImages, renavehImages, sishansImages,
  foodAgentImages, plandoxImages, analiseRfmImages, californiaImages,
  hansPlusImages, relabImages, portfolioImages,
} from "./images";

// Internal types

type Lang = "pt" | "en";

/** Link with an optional English label override (when label differs across langs). */
type LocalizedLink = Omit<LinkItem, "label"> & {
  label?: string;
  labelEn?: string;
};

/** Stat with optional English overrides for label and/or value. */
type LocalizedStat = {
  label: string;
  labelEn?: string;
  value: string;
  valueEn?: string;
};

interface ProjectDef {
  slug: string;
  tags: string[];
  categories: string[];
  icon: LucideIcon;
  images: { pt: GalleryImage[]; en: GalleryImage[] };
  links?: LocalizedLink[];
  stats?: LocalizedStat[];
  i18n: {
    pt: { title: string; shortDesc: string; fullDesc: string; status: Project["status"] };
    en: { title: string; shortDesc: string; fullDesc: string; status: Project["status"] };
  };
}

// Project definitions

const PROJECTS: ProjectDef[] = [
  {
    slug: "monitora-saude",
    tags: ["Power BI", "Laravel", "PostgreSQL"],
    categories: ["Full Stack"],
    icon: BarChart,
    images: monitoraImages,
    stats: [
      { label: "Dashboards", value: "+50" },
      { label: "Fonte de Dados", labelEn: "Data Source", value: "Híbrida", valueEn: "Hybrid" },
    ],
    links: [
      { type: "live", url: "https://monitora.saude.ma.gov.br/" },
      { type: "lock", url: "#", label: "Código Confidencial", labelEn: "Confidential Code" },
    ],
    i18n: {
      pt: {
        title: "Monitora Saúde",
        shortDesc: "Portal de transparência em saúde do Maranhão com cerca de 50 painéis públicos em Power BI.",
        fullDesc: "Portal de Transparência de Saúde do Maranhão, desenvolvido para gestores e população. A coordenação é responsável pela plataforma e pelo fluxo de cadastro de indicadores — os gestores das áreas técnicas registram as informações descritivas e o link do painel Power BI correspondente, que passa a ser exibido automaticamente. Conta também com canal aberto de sugestões, acessível sem autenticação.",
        status: "Concluído",
      },
      en: {
        title: "Health Monitor",
        shortDesc: "Maranhão health transparency portal with around 50 public Power BI dashboards.",
        fullDesc: "Maranhão Health Transparency Portal, built for managers and the general public. The team is responsible for the platform and the indicator registration flow — technical area managers register descriptive information and the corresponding Power BI dashboard link, which is automatically displayed. Also features an open suggestion channel accessible without authentication.",
        status: "Completed",
      },
    },
  },
  {
    slug: "maranhao-livre-da-fome",
    tags: ["Laravel", "MySQL", "JavaScript"],
    categories: ["Full Stack"],
    icon: Layout,
    images: masemfomeImages,
    stats: [
      { label: "Beneficiários Cadastrados", labelEn: "Registered Beneficiaries", value: "26.4k" },
      { label: "Beneficiários Esperados", labelEn: "Expected Beneficiaries", value: "400k" },
      { label: "Cidades", labelEn: "Cities", value: "217" },
    ],
    links: [
      { type: "live", url: "https://maranhaolivredafome.saude.ma.gov.br/" },
      { type: "lock", url: "#", label: "Código Confidencial", labelEn: "Confidential Code" },
    ],
    i18n: {
      pt: {
        title: "Programa Maranhão Livre da Fome",
        shortDesc: "Sistema de cadastro de famílias vulneráveis com perspectiva de 400 mil beneficiários em 217 cidades.",
        fullDesc: "Plataforma oficial do Programa Maranhão Livre da Fome, voltada ao cadastro e acompanhamento de famílias em situação de vulnerabilidade nutricional. Registra consultas, classifica famílias via triagem de risco (TRIA) e gera dados para políticas públicas de saúde e alimentação. Em produção desde novembro de 2025, com registros sendo inseridos gradualmente — a expectativa é alcançar 400 mil beneficiários em cerca de 90 mil famílias. Conta com 479 profissionais de saúde e cerca de 400 usuários entre coordenadores, digitadores e equipe da área técnica.",
        status: "Concluído",
      },
      en: {
        title: "Maranhão Hunger-Free Program",
        shortDesc: "Family registration platform with a target of 400k beneficiaries across 217 cities.",
        fullDesc: "Official platform of the Maranhão Hunger-Free Program, focused on registering and monitoring families in nutritional vulnerability. Records consultations, classifies families through risk screening (TRIA), and generates data for public health and food policies. In production since November 2025, with records being added gradually — the target is 400k beneficiaries across around 90k families. It has 479 health professionals and around 400 users including coordinators, data entry personnel, and technical area staff.",
        status: "Completed",
      },
    },
  },
  {
    slug: "plandox",
    tags: ["React Native", "FastAPI", "Microservices", "Python"],
    categories: ["Mobile", "Full Stack", "Data Science / AI"],
    icon: Code2,
    images: plandoxImages,
    links: [
      { type: "lock", url: "#", label: "Código Privado", labelEn: "Private Code" },
    ],
    i18n: {
      pt: {
        title: "Plandox",
        shortDesc: "Modernização de legado para microsserviços com IA para controle de qualidade.",
        fullDesc: "Migração de arquitetura monolítica para microsserviços. Utiliza modelos de ML para predição de qualidade de biodiesel via Design of Experiments (DoE).",
        status: "Concluído",
      },
      en: {
        title: "Plandox",
        shortDesc: "Modernization from legacy to microservices with AI for quality control.",
        fullDesc: "Migration from monolithic architecture to microservices. Uses ML models for biodiesel quality prediction via Design of Experiments (DoE).",
        status: "Completed",
      },
    },
  },
  {
    slug: "food-review-agent",
    tags: ["Python", "LangChain", "RAG", "LLM", "FastAPI"],
    categories: ["Data Science / AI", "Full Stack"],
    icon: Brain,
    images: foodAgentImages,
    links: [
      { type: "github", url: "https://github.com/josevbrito/food-review-agent" },
    ],
    i18n: {
      pt: {
        title: "FoodReview Insights Agent",
        shortDesc: "Agente Autônomo de IA que analisa reviews de delivery usando RAG e LangChain.",
        fullDesc: "Sistema inteligente que permite a donos de restaurantes 'conversarem' com suas avaliações. Utiliza arquitetura RAG (Retrieval-Augmented Generation) com LangChain e OpenAI para extrair insights estratégicos, calcular métricas de satisfação e identificar padrões de sentimento em tempo real. Backend em Python (FastAPI) e interface moderna em Next.js.",
        status: "Concluído",
      },
      en: {
        title: "FoodReview Insights Agent",
        shortDesc: "Autonomous AI Agent analyzing delivery reviews using RAG and LangChain.",
        fullDesc: "Intelligent system allowing restaurant owners to 'chat' with their reviews. Uses RAG (Retrieval-Augmented Generation) architecture with LangChain and OpenAI to extract strategic insights, calculate satisfaction metrics, and identify sentiment patterns in real-time. Python (FastAPI) Backend and modern Next.js Frontend.",
        status: "Completed",
      },
    },
  },
  {
    slug: "renaveh-ma",
    tags: ["Laravel", "MySQL", "JavaScript"],
    categories: ["Full Stack"],
    icon: Database,
    images: renavehImages,
    stats: [
      { label: "Casos Notificados", labelEn: "Cases Notified", value: "+72k" },
      { label: "Hospitais", labelEn: "Hospitals", value: "98" },
      { label: "Usuários", labelEn: "Users", value: "270" },
    ],
    links: [
      { type: "live", url: "https://renaveh.saude.ma.gov.br/" },
      { type: "lock", url: "#", label: "Código Confidencial", labelEn: "Confidential Code" },
    ],
    i18n: {
      pt: {
        title: "Sistema de Notificação Hospitalar (RENAVEH)",
        shortDesc: "Sistema com 2FA e RBAC para vigilância epidemiológica hospitalar. +72k casos notificados em 98 unidades.",
        fullDesc: "O RENAVEH-MA (Rede Nacional de Vigilância Epidemiológica Hospitalar — Maranhão) permite às instituições de saúde registrar e acompanhar notificações de doenças e agravos. Vai além das notificações compulsórias, visando a detecção e resposta imediata a Emergências de Saúde Pública (ESP). Em produção desde fevereiro de 2024, o sistema conta com autenticação em dois fatores (2FA), controle granular de acesso por perfis (RBAC) e aproximadamente 270 usuários cadastrados.",
        status: "Concluído",
      },
      en: {
        title: "Hospital Notification System (RENAVEH)",
        shortDesc: "System with 2FA and RBAC for hospital epidemiological surveillance. +72k cases notified in 98 units.",
        fullDesc: "The RENAVEH-MA (National Hospital Epidemiological Surveillance Network — Maranhão) allows health institutions to register and monitor notifications of diseases and injuries. It goes beyond compulsory notifications, aiming for immediate detection and response to Public Health Emergencies (PHE). In production since February 2024, the system features two-factor authentication (2FA), granular role-based access control (RBAC), and approximately 270 registered users.",
        status: "Completed",
      },
    },
  },
  {
    slug: "sishans",
    tags: ["Laravel", "PostgreSQL", "JavaScript"],
    categories: ["Full Stack"],
    icon: Database,
    images: sishansImages,
    stats: [
      { label: "Pacientes", labelEn: "Patients", value: "5.6k" },
      { label: "Questionários", labelEn: "Questionnaires", value: "5.5k" },
      { label: "Municípios", labelEn: "Municipalities", value: "50" },
    ],
    links: [
      { type: "live", url: "https://sishans.saude.ma.gov.br/" },
      { type: "lock", url: "#", label: "Código Confidencial", labelEn: "Confidential Code" },
    ],
    i18n: {
      pt: {
        title: "SISHANS - Sistema de Hanseníase",
        shortDesc: "Sistema de registro e acompanhamento de casos de hanseníase com 5.6k pacientes em 50 municípios.",
        fullDesc: "O SISHANS (Sistema de Hanseníase) permite às equipes de saúde registrar questionários diagnósticos e acompanhar casos suspeitos, facilitando a notificação precoce e a coleta de dados para ações de prevenção. Em produção desde janeiro de 2026, já aplicou 5.5k questionários em 50 municípios do Maranhão. Segue os padrões institucionais com 2FA e controle granular de acesso por perfis (RBAC).",
        status: "Concluído",
      },
      en: {
        title: "SISHANS - Leprosy Information System",
        shortDesc: "System for recording and monitoring leprosy cases with 5.6k patients across 50 municipalities.",
        fullDesc: "SISHANS (Leprosy Information System) enables health teams to register diagnostic questionnaires and monitor suspected cases, supporting early notification and data collection for prevention. Live since January 2026, it has processed 5.5k questionnaires across 50 municipalities in Maranhão. Follows institutional security standards with 2FA and granular role-based access control (RBAC).",
        status: "Completed",
      },
    },
  },
  {
    slug: "analise-rfm-ml",
    tags: ["Python", "Machine Learning", "Scikit-learn", "Flask"],
    categories: ["Data Science / AI"],
    icon: Brain,
    images: analiseRfmImages,
    stats: [
      { label: "Precisão", labelEn: "Precision", value: "Alta", valueEn: "High" },
      { label: "Clusters", value: "5" },
      { label: "Pipeline", value: "Automático", valueEn: "Automated" },
    ],
    links: [
      { type: "github", url: "https://github.com/josevbrito/online-retail-rfm-analysis" },
    ],
    i18n: {
      pt: {
        title: "Segmentação de Clientes RFM com IA",
        shortDesc: "Pipeline completo de Machine Learning para classificar clientes em 5 clusters estratégicos.",
        fullDesc: "Sistema desenvolvido em Python utilizando análise RFM (Recency, Frequency, Monetary) com Machine Learning. Classifica clientes em grupos como 'Super Campeões', 'Em Risco' e 'VIPs' para estratégias de marketing direcionadas. Inclui interface web em Flask.",
        status: "Concluído",
      },
      en: {
        title: "AI-Powered RFM Customer Segmentation",
        shortDesc: "Complete Machine Learning pipeline to classify customers into 5 strategic clusters.",
        fullDesc: "System developed in Python using RFM analysis (Recency, Frequency, Monetary) with Machine Learning. Classifies customers into groups such as 'Champions', 'At Risk', and 'VIPs' for targeted marketing strategies. Includes a Flask web interface.",
        status: "Completed",
      },
    },
  },
  {
    slug: "hans-plus",
    tags: ["Flutter", "Firebase", "NoSQL", "Mobile"],
    categories: ["Mobile"],
    icon: Smartphone,
    images: hansPlusImages,
    links: [
      { type: "apk", url: "/downloads/hans-plus.apk", label: "APK Android" },
    ],
    i18n: {
      pt: {
        title: "Hans+",
        shortDesc: "App mobile para auxílio no tratamento da hanseníase.",
        fullDesc: "Aplicação focada no paciente, permitindo cadastro de sintomas e controle de medicação diária. Desenvolvido com foco em UX e simplicidade de uso.",
        status: "Concluído",
      },
      en: {
        title: "Hans+",
        shortDesc: "Mobile app to assist in leprosy treatment.",
        fullDesc: "Patient-focused application allowing symptom registration and daily medication control. Developed with a focus on UX and simplicity of use.",
        status: "Completed",
      },
    },
  },
  {
    slug: "relab",
    tags: ["Laravel", "PostgreSQL", "React"],
    categories: ["Full Stack"],
    icon: Database,
    images: relabImages,
    links: [
      { type: "live", url: "https://relab-ioclacen.saude.ma.gov.br/" },
      { type: "lock", url: "#", label: "Código Confidencial", labelEn: "Confidential Code" },
    ],
    i18n: {
      pt: {
        title: "RELAB - Rede Laboratorial",
        shortDesc: "Plataforma de cadastro de laboratórios na rede do LACEN-MA com integração automática à API do CNES.",
        fullDesc: "O RELAB permite o cadastro de laboratórios na Rede do Laboratório Central de Saúde Pública do Maranhão (LACEN-MA). A plataforma integra-se à API do CNES (Cadastro Nacional de Estabelecimentos de Saúde) para preenchimento automático dos dados durante o cadastro. O fluxo contempla: o gestor cadastra o laboratório e o responsável técnico; o responsável técnico informa os exames realizados e o quantitativo de funcionários por hora de funcionamento.",
        status: "Concluído",
      },
      en: {
        title: "RELAB - Laboratory Network",
        shortDesc: "Platform for registering laboratories in the LACEN-MA network with automatic CNES API integration.",
        fullDesc: "RELAB enables the registration of laboratories in the LACEN-MA (Maranhão Central Public Health Laboratory) network. The platform integrates with the CNES API (National Health Establishment Registry) to automatically fill in unit data during registration. The workflow covers: the manager registers the laboratory and technical manager; the technical manager then registers the exams performed and staff count per shift.",
        status: "Completed",
      },
    },
  },
  {
    slug: "portfolio-sys-brito",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "next-intl"],
    categories: ["Full Stack"],
    icon: Layout,
    images: portfolioImages,
    links: [
      { type: "live", url: "https://josevbrito.com" },
      { type: "github", url: "https://github.com/josevbrito/portfolio-sys-brito" },
    ],
    i18n: {
      pt: {
        title: "Portfólio Pessoal",
        shortDesc: "Portfólio moderno com tema dark, animações e suporte a múltiplos idiomas (PT/EN).",
        fullDesc: "Portfolio pessoal desenvolvido com Next.js 15 e TypeScript, apresentando projetos, experiências profissionais e habilidades técnicas. Conta com tema dark inspirado em terminais, animações fluidas, internacionalização (PT/EN) via next-intl e design responsivo com Tailwind CSS.",
        status: "Concluído",
      },
      en: {
        title: "Personal Portfolio",
        shortDesc: "Modern portfolio with dark theme, animations and multi-language support (PT/EN).",
        fullDesc: "Personal portfolio built with Next.js 15 and TypeScript, showcasing projects, professional experience and technical skills. Features a dark terminal-inspired theme, fluid animations, internationalization (PT/EN) via next-intl and responsive design with Tailwind CSS.",
        status: "Completed",
      },
    },
  },
  {
    slug: "california-housing",
    tags: ["Python", "ML Pipeline", "Pandas"],
    categories: ["Data Science / AI"],
    icon: Code2,
    images: californiaImages,
    links: [
      { type: "github", url: "https://github.com/josevbrito/california-housing-ml-pipeline" },
    ],
    i18n: {
      pt: {
        title: "Predição Imobiliária (Califórnia)",
        shortDesc: "Pipeline de ML para predição de preços imobiliários com otimização de hiperparâmetros.",
        fullDesc: "Desenvolvimento de sistema completo de predição. Inclui comparação de algoritmos, pré-processamento, validação de modelos e métricas de performance.",
        status: "Concluído",
      },
      en: {
        title: "Real Estate Prediction (California)",
        shortDesc: "ML pipeline for real estate price prediction with hyperparameter optimization.",
        fullDesc: "Development of a complete prediction system. Includes algorithm comparison, pre-processing, model validation, and performance metrics.",
        status: "Completed",
      },
    },
  },
];

// Mapper

function mapProject(def: ProjectDef, lang: Lang): Project {
  const t = def.i18n[lang];
  return {
    slug: def.slug,
    title: t.title,
    shortDesc: t.shortDesc,
    fullDesc: t.fullDesc,
    status: t.status,
    tags: def.tags,
    categories: def.categories,
    icon: def.icon,
    images: def.images[lang],
    stats: def.stats?.map((s) => ({
      label: lang === "en" ? (s.labelEn ?? s.label) : s.label,
      value: lang === "en" ? (s.valueEn ?? s.value) : s.value,
    })),
    links: def.links?.map((l) => ({
      type: l.type,
      url: l.url,
      label: lang === "en" ? (l.labelEn ?? l.label) : l.label,
    })),
  };
}

export function getProjects(lang: Lang): Project[] {
  return PROJECTS.map((def) => mapProject(def, lang));
}
