import { Code2, Smartphone, Database, Brain, Layout, BarChart } from "lucide-react";
import type { Project } from "../types";
import type { GalleryImage } from "../types";

const portfolioImagesPt: GalleryImage[] = [
  { src: "/sys-brito/josevbrito.com.%23hero.png",                          caption: "Página inicial — Hero" },
  { src: "/sys-brito/josevbrito.com.%23projects.png",                      caption: "Seção de Projetos" },
  { src: "/sys-brito/josevbrito.com.projects.png",                         caption: "Lista de Projetos" },
  { src: "/sys-brito/josevbrito.com.%23experience.png",                    caption: "Seção de Experiência" },
  { src: "/sys-brito/josevbrito.com.experience.png",                       caption: "Detalhe da Experiência" },
  { src: "/sys-brito/josevbrito.com.%23contact.png",                       caption: "Seção de Contato" },
  { src: "/sys-brito/josevbrito.com.projects.sys-brito.png",  caption: "Página do Projeto" },
];

const portfolioImagesEn: GalleryImage[] = [
  { src: "/sys-brito/josevbrito.com.%23hero.png",                          caption: "Home — Hero Section" },
  { src: "/sys-brito/josevbrito.com.%23projects.png",                      caption: "Projects Section" },
  { src: "/sys-brito/josevbrito.com.projects.png",                         caption: "Projects List" },
  { src: "/sys-brito/josevbrito.com.%23experience.png",                    caption: "Experience Section" },
  { src: "/sys-brito/josevbrito.com.experience.png",                       caption: "Experience Detail" },
  { src: "/sys-brito/josevbrito.com.%23contact.png",                       caption: "Contact Section" },
  { src: "/sys-brito/josevbrito.com.projects.sys-brito.png",  caption: "Project Page" },
];

const masemfomeImagesPt: GalleryImage[] = [
  { src: "/masemfome/login.png", caption: "Página de Login" },
];

const masemfomeImagesEn: GalleryImage[] = [
  { src: "/masemfome/login.png", caption: "Login Page" },
];

const monitoraImagesPt: GalleryImage[] = [
  { src: "/monitora/home.png", caption: "Página Inicial" },
  { src: "/monitora/grupos_de_indicadores.png", caption: "Grupos de Indicadores" },
  { src: "/monitora/indicadores_da_vigilancia_epidemiologica_e_controle_de_doencas.png", caption: "Indicadores da Vigilância Epidemiológica e Controle de Doenças" },
  { src: "/monitora/painel_de_monitoramento_da_dengue.png", caption: "Painel de Monitoramento da Dengue" },
  { src: "/monitora/painel_de_monitoramento_das_notificacoes_de_trabalho.png", caption: "Painel de Monitoramento das Notificações por Acidente de Trabalho" },
  { src: "/monitora/painel_de_cobertura_vacinal_em_criancas_menores_de_um_ano.png", caption: "Painel de Cobertura Vacinal em Crianças Menores de um Ano" },
  { src: "/monitora/painel_indicador_8_do_pqavs.png", caption: "Painel do Indicador 8 do PQAVS (Levantamento Entomológico)" },
];

const monitoraImagesEn: GalleryImage[] = [
  { src: "/monitora/home.png", caption: "Home Screen" },
  { src: "/monitora/grupos_de_indicadores.png", caption: "Indicator Groups" },
  { src: "/monitora/indicadores_da_vigilancia_epidemiologica_e_controle_de_doencas.png", caption: "Epidemiological Surveillance and Disease Control Indicators" },
  { src: "/monitora/painel_de_monitoramento_da_dengue.png", caption: "Dengue Monitoring Dashboard" },
  { src: "/monitora/painel_de_monitoramento_das_notificacoes_de_trabalho.png", caption: "Work Accident Notifications Monitoring Dashboard" },
  { src: "/monitora/painel_de_cobertura_vacinal_em_criancas_menores_de_um_ano.png", caption: "Vaccination Coverage Dashboard for Children Under One Year" },
  { src: "/monitora/painel_indicador_8_do_pqavs.png", caption: "Indicator 8 Dashboard for PQAVS (Entomological Survey)" },
];

const renavehImagesPt: GalleryImage[] = [
  { src: "/renaveh/login.png", caption: "Página de Login" },
];

const renavehImagesEn: GalleryImage[] = [
  { src: "/renaveh/login.png", caption: "Login Page" },
];

const foodReviewAgentImagesPt: GalleryImage[] = [
  { src: "/food-agent/preview.png", caption: "Preview do FoodReview Insights Agent" },
];

const foodReviewAgentImagesEn: GalleryImage[] = [
  { src: "/ food-agent/preview.png", caption: "Preview of the FoodReview Insights Agent" },
];

const plandoxImagesPt: GalleryImage[] = [
  { src: "/plandox/logo.png", caption: "Plandox" },
  { src: "/plandox/login.png", caption: "Página de Login" },
  { src: "/plandox/cadastro.png", caption: "Página de Cadastro" },
  { src: "/plandox/recuperar_senha.png", caption: "Recuperar Senha" },
  { src: "/plandox/doe_exemplo.png", caption: "Exemplo de DOE" },
];

const plandoxImagesEn: GalleryImage[] = [
  { src: "/plandox/logo.png", caption: "Plandox" },
  { src: "/plandox/login.png", caption: "Login Page of Plandox" },
  { src: "/plandox/cadastro.png", caption: "Registration Page of Plandox" },
  { src: "/plandox/recuperar_senha.png", caption: "Password Recovery Page of Plandox" },
  { src: "/plandox/doe_exemplo.png", caption: "Example of DOE in Plandox" },
];

const analiseRfmImagesPt: GalleryImage[] = [
  { src: "/analise-rfm-ml/tela_principal.png", caption: "Análise de Clusters" },
  { src: "/analise-rfm-ml/guia_segmentos_rfm_1.png", caption: "Segmentos de Clientes" },
  { src: "/analise-rfm-ml/guia_segmentos_rfm_2.png", caption: "Segmentos de Clientes" },
  { src: "/analise-rfm-ml/elbow_curve.png", caption: "Curva do Cotovelo para Clusters" },
];

const analiseRfmImagesEn: GalleryImage[] = [
  { src: "/analise-rfm-ml/tela_principal.png", caption: "Cluster Analysis" },
  { src: "/analise-rfm-ml/guia_segmentos_rfm_1.png", caption: "Customer Segments" },
  { src: "/analise-rfm-ml/guia_segmentos_rfm_2.png", caption: "Customer Segments" },
  { src: "/analise-rfm-ml/elbow_curve.png", caption: "Elbow Curve for Clusters" },
];

const californiaHousingImagesPt: GalleryImage[] = [
  { src: "/california-housing/housing_prices_scatterplot.png", caption: "Preços de Imóveis - Gráfico de Dispersão" },
  { src: "/california-housing/histogram_plots.png", caption: "Histogramas das Features" },
];

const californiaHousingImagesEn: GalleryImage[] = [
  { src: "/california-housing/housing_prices_scatterplot.png", caption: "Housing Prices - Scatter Plot" },
  { src: "/california-housing/histogram_plots.png", caption: "Histograms of Features" },
];

const hansPlusImagesPt: GalleryImage[] = [
  { src: "/hans-plus/hans-mais.png", caption: "Hans+" },

  { src: "/hans-plus/auth/login.jpeg", caption: "Tela de Login" },
  { src: "/hans-plus/auth/register-1.jpeg", caption: "Primeira parte da Tela de Cadastro" },
  { src: "/hans-plus/auth/register-2.jpeg", caption: "Segunda parte da Tela de Cadastro" },
  { src: "/hans-plus/auth/splash.jpeg", caption: "Tela de Splash" },

  { src: "/hans-plus/home/home.jpeg", caption: "Tela Inicial" },

  { src: "/hans-plus/info/info-1.jpeg", caption: "Primeira parte da Tela de Informações sobre a Hanseníase" },
  { src: "/hans-plus/info/info-2.jpeg", caption: "Segunda parte da Tela de Informações sobre a Hanseníase" },
  { src: "/hans-plus/info/info-sinais-e-sintomas.jpeg", caption: "Tela de Informações sobre Sinais e Sintomas" },

  { src: "/hans-plus/profile/perfil.jpeg", caption: "Tela de Perfil" },
  { src: "/hans-plus/profile/perfil-editar-info-conta.jpeg", caption: "Tela de Edição de Informações da Conta"},
  { src: "/hans-plus/profile/perfil-historico.jpeg", caption: "Tela de Histórico de Sintomas"},
  { src: "/hans-plus/profile/saiba-mais.jpeg", caption: "Tela de Saiba Mais"},
  { src: "/hans-plus/profile/sobre-nos-1.jpeg", caption: "Primeira parte da Tela de Sobre Nós"},
  { src: "/hans-plus/profile/sobre-nos-2.jpeg", caption: "Segunda parte da Tela de Sobre Nós"},
];

const hansPlusImagesEn: GalleryImage[] = [
  { src: "/hans-plus/hans-mais.png", caption: "Hans+" },

  { src: "/hans-plus/auth/login.jpeg", caption: "Login Screen" },
  { src: "/hans-plus/auth/register-1.jpeg", caption: "First Part of Registration Screen" },
  { src: "/hans-plus/auth/register-2.jpeg", caption: "Second Part of Registration Screen" },
  { src: "/hans-plus/auth/splash.jpeg", caption: "Splash Screen" },

  { src: "/hans-plus/home/home.jpeg", caption: "Home Screen" },

  { src: "/hans-plus/info/info-1.jpeg", caption: "First Part of Information about Leprosy Screen" },
  { src: "/hans-plus/info/info-2.jpeg", caption: "Second Part of Information about Leprosy Screen" },
  { src: "/hans-plus/info/info-sinais-e-sintomas.jpeg", caption: "Information about Signs and Symptoms Screen" },

  { src: "/hans-plus/profile/perfil.jpeg", caption: "Profile Screen" },
  { src: "/hans-plus/profile/perfil-editar-info-conta.jpeg", caption: "Edit Account Information Screen"},
  { src: "/hans-plus/profile/perfil-historico.jpeg", caption: "Symptom History Screen"},
  { src: "/hans-plus/profile/saiba-mais.jpeg", caption: "Learn More Screen"},
  { src: "/hans-plus/profile/sobre-nos-1.jpeg", caption: "First Part of About Us Screen"},
  { src: "/hans-plus/profile/sobre-nos-2.jpeg", caption: "Second Part of About Us Screen"},
];


const projectsPt: Project[] = [
  {
    slug: "monitora-saude",
    title: "Monitora Saúde",
    shortDesc: "Plataforma de transparência com mais de 50 dashboards interativos em Power BI.",
    fullDesc: "Portal de Transparência de Saúde do Maranhão. Ferramenta vital para gestores e população, permitindo monitoramento de indicadores de saúde e processos em tempo real para suporte à tomada de decisão.",
    tags: ["Power BI", "Laravel", "PostgreSQL"],
    categories: ["Full Stack"],
    status: "Concluído",
    icon: BarChart,
    images: monitoraImagesPt,
    stats: [
      { label: "Dashboards", value: "+50" },
      { label: "Fonte de Dados", value: "Híbrida" }
    ],
    links: [
      { type: "live", url: "https://monitora.saude.ma.gov.br/" },
      { type: "lock", url: "#", label: "Código Confidencial" }
    ]
  },
  {
    slug: "food-review-agent",
    title: "FoodReview Insights Agent",
    shortDesc: "Agente Autônomo de IA que analisa reviews de delivery usando RAG e LangChain.",
    fullDesc: "Sistema inteligente que permite a donos de restaurantes 'conversarem' com suas avaliações. Utiliza arquitetura RAG (Retrieval-Augmented Generation) com LangChain e OpenAI para extrair insights estratégicos, calcular métricas de satisfação e identificar padrões de sentimento em tempo real. Backend em Python (FastAPI) e interface moderna em Next.js.",
    tags: ["Python", "LangChain", "RAG", "LLM", "FastAPI"],
    categories: ["Data Science / AI", "Full Stack"],
    status: "Concluído",
    icon: Brain,
    images: foodReviewAgentImagesPt,
    links: [
      { type: "github", url: "https://github.com/josevbrito/food-review-agent" }
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
    images: masemfomeImagesPt,
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
    categories: ["Mobile", "Full Stack", "Data Science / AI"],
    status: "Concluído",
    icon: Code2,
    images: plandoxImagesPt,
    links: [
      { type: "lock", url: "#", label: "Código Privado" }
    ]
  },
  {
    slug: "renaveh-ma",
    title: "Sistema de Notificação Hospitalar (RENAVEH)",
    shortDesc: "Sistema robusto em Laravel/MySQL com 2FA e RBAC. Processa 50k registros e atende 98 hospitais.",
    fullDesc: "O RENAVEH-MA (Sistema de Informação da Rede Nacional de Vigilância Epidemiológica Hospitalar) foi implantado como subsistema estratégico. Ele não se limita a notificações compulsórias, mas objetiva a detecção e resposta imediata a Emergências de Saúde Pública (ESP). O sistema conta com controle de acesso rigoroso (RBAC) e autenticação de dois fatores (2FA).",
    tags: ["Laravel", "MySQL", "JavaScript"],
    categories: ["Full Stack"],
    status: "Concluído",
    icon: Database,
    images: renavehImagesPt,
    stats: [
      { label: "Registros", value: "+50k" },
      { label: "Hospitais", value: "98" },
      { label: "Impacto", value: "Estadual" }
    ],
    links: [
      { type: "live", url: "https://renaveh.saude.ma.gov.br/" },
      { type: "lock", url: "#", label: "Código Confidencial" }
    ],
  },
  {
    slug: "analise-rfm-ml",
    title: "Segmentação de Clientes RFM com IA",
    shortDesc: "Pipeline completo de Machine Learning para classificar clientes em 5 clusters estratégicos.",
    fullDesc: "Sistema desenvolvido em Python utilizando análise RFM (Recency, Frequency, Monetary) com Machine Learning. Classifica clientes em grupos como 'Super Campeões', 'Em Risco' e 'VIPs' para estratégias de marketing direcionadas. Inclui interface web em Flask.",
    tags: ["Python", "Machine Learning", "Scikit-learn", "Flask"],
    categories: ["Data Science / AI"],
    status: "Concluído",
    icon: Brain,
    images: analiseRfmImagesPt,
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
    slug: "hans-plus",
    title: "Hans+",
    shortDesc: "App mobile para auxílio no tratamento da hanseníase.",
    fullDesc: "Aplicação focada no paciente, permitindo cadastro de sintomas e controle de medicação diária. Desenvolvido com foco em UX e simplicidade de uso.",
    tags: ["Flutter", "Firebase", "NoSQL", "Mobile"],
    categories: ["Mobile"],
    status: "Concluído",
    icon: Smartphone,
    images: hansPlusImagesPt,
    links: [
      { type: "apk", url: "/hans-plus/hans+.apk", label: "APK Android" }
    ]
  }, 
  {
    slug: "portfolio-sys-brito",
    title: "Portfólio Pessoal",
    shortDesc: "Portfólio moderno com tema dark, animações e suporte a múltiplos idiomas (PT/EN).",
    fullDesc: "Portfolio pessoal desenvolvido com Next.js 15 e TypeScript, apresentando projetos, experiências profissionais e habilidades técnicas. Conta com tema dark inspirado em terminais, animações fluidas, internacionalização (PT/EN) via next-intl e design responsivo com Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "next-intl"],
    categories: ["Full Stack"],
    status: "Concluído",
    icon: Layout,
    images: portfolioImagesPt,
    links: [
      { type: "live", url: "https://josevbrito.com" },
      { type: "github", url: "https://github.com/josevbrito/portfolio-sys-brito" }
    ]
  },
  {
    slug: "california-housing",
    title: "Predição Imobiliária (Califórnia)",
    shortDesc: "Pipeline de ML para predição de preços imobiliários com otimização de hiperparâmetros.",
    fullDesc: "Desenvolvimento de sistema completo de predição. Inclui comparação de algoritmos, pré-processamento, validação de modelos e métricas de performance.",
    tags: ["Python", "ML Pipeline", "Pandas"],
    categories: ["Data Science / AI"],
    status: "Concluído",
    icon: Code2,
    images: californiaHousingImagesPt,
    links: [
      { type: "github", url: "https://github.com/josevbrito/california-housing-ml-pipeline" }
    ]
  }
];

const projectsEn: Project[] = [
  {
    slug: "monitora-saude",
    title: "Health Monitor",
    shortDesc: "Transparency platform with over 50 interactive Power BI dashboards.",
    fullDesc: "Maranhão Health Transparency Portal. A vital tool for managers and the population, allowing real-time monitoring of health indicators and processes to support decision-making.",
    tags: ["Power BI", "Laravel", "PostgreSQL"],
    categories: ["Full Stack"],
    status: "Completed",
    icon: BarChart,
    images: monitoraImagesEn,
    stats: [
      { label: "Dashboards", value: "+50" },
      { label: "Data Source", value: "Hybrid" }
    ],
    links: [
      { type: "live", url: "https://monitora.saude.ma.gov.br/" },
      { type: "lock", url: "#", label: "Confidential Code" }
    ]
  },
  {
    slug: "food-review-agent",
    title: "FoodReview Insights Agent",
    shortDesc: "Autonomous AI Agent analyzing delivery reviews using RAG and LangChain.",
    fullDesc: "Intelligent system allowing restaurant owners to 'chat' with their reviews. Uses RAG (Retrieval-Augmented Generation) architecture with LangChain and OpenAI to extract strategic insights, calculate satisfaction metrics, and identify sentiment patterns in real-time. Python (FastAPI) Backend and modern Next.js Frontend.",
    tags: ["Python", "LangChain", "RAG", "LLM", "FastAPI"],
    categories: ["Data Science / AI", "Full Stack"],
    status: "Completed",
    icon: Brain,
    images: foodReviewAgentImagesEn,
    links: [
      { type: "github", url: "https://github.com/josevbrito/food-review-agent" }
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
    images: masemfomeImagesEn,
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
    categories: ["Mobile", "Full Stack", "Data Science / AI"],
    status: "Completed",
    icon: Code2,
    images: plandoxImagesEn,
    links: [
      { type: "lock", url: "#", label: "Private Code" }
    ]
  },
  {
    slug: "renaveh-ma",
    title: "Hospital Notification System (RENAVEH)",
    shortDesc: "Robust Laravel/MySQL system with 2FA and RBAC. Processes 50k records and serves 98 hospitals.",
    fullDesc: "RENAVEH-MA (National Hospital Epidemiological Surveillance System Information - Maranhão) was implemented as a strategic subsystem. It is not limited to compulsory notifications but aims at the detection and immediate response to Public Health Emergencies (PHE). The system features strict access control (RBAC) and two-factor authentication (2FA).",
    tags: ["Laravel", "MySQL", "JavaScript"],
    categories: ["Full Stack"],
    status: "Completed",
    icon: Database,
    images: renavehImagesEn,
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
    slug: "analise-rfm-ml",
    title: "AI-Powered RFM Customer Segmentation",
    shortDesc: "Complete Machine Learning pipeline to classify customers into 5 strategic clusters.",
    fullDesc: "System developed in Python using RFM analysis (Recency, Frequency, Monetary) with Machine Learning. Classifies customers into groups such as 'Champions', 'At Risk', and 'VIPs' for targeted marketing strategies. Includes a Flask web interface.",
    tags: ["Python", "Machine Learning", "Scikit-learn", "Flask"],
    categories: ["Data Science / AI"],
    status: "Completed",
    icon: Brain,
    images: analiseRfmImagesEn,
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
    slug: "hans-plus",
    title: "Hans+",
    shortDesc: "Mobile app to assist in leprosy treatment.",
    fullDesc: "Patient-focused application allowing symptom registration and daily medication control. Developed with a focus on UX and simplicity of use.",
    tags: ["Flutter", "Firebase", "NoSQL", "Mobile"],
    categories: ["Mobile"],
    status: "Completed",
    icon: Smartphone,
    images: hansPlusImagesEn,
    links: [
      { type: "apk", url: "#", label: "APK Available" }
    ]
  },
  {
    slug: "portfolio-sys-brito",
    title: "Personal Portfolio",
    shortDesc: "Modern portfolio with dark theme, animations and multi-language support (PT/EN).",
    fullDesc: "Personal portfolio built with Next.js 15 and TypeScript, showcasing projects, professional experience and technical skills. Features a dark terminal-inspired theme, fluid animations, internationalization (PT/EN) via next-intl and responsive design with Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "next-intl"],
    categories: ["Full Stack"],
    status: "Completed",
    icon: Layout,
    images: portfolioImagesEn,
    links: [
      { type: "live", url: "https://josevbrito.com" },
      { type: "github", url: "https://github.com/josevbrito/portfolio-sys-brito" }
    ]
  },
  {
    slug: "california-housing",
    title: "Real Estate Prediction (California)",
    shortDesc: "ML pipeline for real estate price prediction with hyperparameter optimization.",
    fullDesc: "Development of a complete prediction system. Includes algorithm comparison, pre-processing, model validation, and performance metrics.",
    tags: ["Python", "ML Pipeline", "Pandas"],
    categories: ["Data Science / AI"],
    status: "Completed",
    icon: Code2,
    images: californiaHousingImagesEn,
    links: [
      { type: "github", url: "https://github.com/josevbrito/california-housing-ml-pipeline" }
    ]
  }
];

export function getProjects(lang: "pt" | "en"): Project[] {
  return lang === "pt" ? projectsPt : projectsEn;
}
