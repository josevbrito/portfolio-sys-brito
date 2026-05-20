import { Code2, Smartphone, Database, Brain, Layout, BarChart } from "lucide-react";
import type { Project } from "../types";
import type { GalleryImage } from "../types";

const portfolioImagesPt: GalleryImage[] = [
  { src: "/projects/sys-brito/josevbrito.com.%23hero.png",                          caption: "Página inicial — Hero" },
  { src: "/projects/sys-brito/josevbrito.com.%23projects.png",                      caption: "Seção de Projetos" },
  { src: "/projects/sys-brito/josevbrito.com.projects.png",                         caption: "Lista de Projetos" },
  { src: "/projects/sys-brito/josevbrito.com.%23experience.png",                    caption: "Seção de Experiência" },
  { src: "/projects/sys-brito/josevbrito.com.experience.png",                       caption: "Detalhe da Experiência" },
  { src: "/projects/sys-brito/josevbrito.com.%23contact.png",                       caption: "Seção de Contato" },
  { src: "/projects/sys-brito/josevbrito.com.projects.sys-brito.png",  caption: "Página do Projeto" },
];

const portfolioImagesEn: GalleryImage[] = [
  { src: "/projects/sys-brito/josevbrito.com.%23hero.png",                          caption: "Home — Hero Section" },
  { src: "/projects/sys-brito/josevbrito.com.%23projects.png",                      caption: "Projects Section" },
  { src: "/projects/sys-brito/josevbrito.com.projects.png",                         caption: "Projects List" },
  { src: "/projects/sys-brito/josevbrito.com.%23experience.png",                    caption: "Experience Section" },
  { src: "/projects/sys-brito/josevbrito.com.experience.png",                       caption: "Experience Detail" },
  { src: "/projects/sys-brito/josevbrito.com.%23contact.png",                       caption: "Contact Section" },
  { src: "/projects/sys-brito/josevbrito.com.projects.sys-brito.png",  caption: "Project Page" },
];

const masemfomeImagesPt: GalleryImage[] = [
  { src: "/projects/masemfome/login.png", caption: "Página de Login" },
];

const masemfomeImagesEn: GalleryImage[] = [
  { src: "/projects/masemfome/login.png", caption: "Login Page" },
];

const monitoraImagesPt: GalleryImage[] = [
  { src: "/projects/monitora/home.png", caption: "Página Inicial" },
  { src: "/projects/monitora/grupos_de_indicadores.png", caption: "Grupos de Indicadores" },
  { src: "/projects/monitora/indicadores_da_vigilancia_epidemiologica_e_controle_de_doencas.png", caption: "Indicadores da Vigilância Epidemiológica e Controle de Doenças" },
  { src: "/projects/monitora/painel_de_monitoramento_da_dengue.png", caption: "Painel de Monitoramento da Dengue" },
  { src: "/projects/monitora/painel_de_monitoramento_das_notificacoes_de_trabalho.png", caption: "Painel de Monitoramento das Notificações por Acidente de Trabalho" },
  { src: "/projects/monitora/painel_de_cobertura_vacinal_em_criancas_menores_de_um_ano.png", caption: "Painel de Cobertura Vacinal em Crianças Menores de um Ano" },
  { src: "/projects/monitora/painel_indicador_8_do_pqavs.png", caption: "Painel do Indicador 8 do PQAVS (Levantamento Entomológico)" },
];

const monitoraImagesEn: GalleryImage[] = [
  { src: "/projects/monitora/home.png", caption: "Home Screen" },
  { src: "/projects/monitora/grupos_de_indicadores.png", caption: "Indicator Groups" },
  { src: "/projects/monitora/indicadores_da_vigilancia_epidemiologica_e_controle_de_doencas.png", caption: "Epidemiological Surveillance and Disease Control Indicators" },
  { src: "/projects/monitora/painel_de_monitoramento_da_dengue.png", caption: "Dengue Monitoring Dashboard" },
  { src: "/projects/monitora/painel_de_monitoramento_das_notificacoes_de_trabalho.png", caption: "Work Accident Notifications Monitoring Dashboard" },
  { src: "/projects/monitora/painel_de_cobertura_vacinal_em_criancas_menores_de_um_ano.png", caption: "Vaccination Coverage Dashboard for Children Under One Year" },
  { src: "/projects/monitora/painel_indicador_8_do_pqavs.png", caption: "Indicator 8 Dashboard for PQAVS (Entomological Survey)" },
];

const renavehImagesPt: GalleryImage[] = [
  { src: "/projects/renaveh/login.png", caption: "Página de Login" },
];

const renavehImagesEn: GalleryImage[] = [
  { src: "/projects/renaveh/login.png", caption: "Login Page" },
];

const sishansImagesPt: GalleryImage[] = [
  { src: "/projects/sishans/login.png", caption: "Página de Login" },
  { src: "/projects/sishans/materiais_de_apoio.png", caption: "Materiais de Apoio" },
];

const sishansImagesEn: GalleryImage[] = [
  { src: "/projects/sishans/login.png", caption: "Login Page" },
  { src: "/projects/sishans/materiais_de_apoio.png", caption: "Support Materials" },
];

const foodReviewAgentImagesPt: GalleryImage[] = [
  { src: "/projects/food-agent/preview.png", caption: "Preview do FoodReview Insights Agent" },
];

const foodReviewAgentImagesEn: GalleryImage[] = [
  { src: "/projects/food-agent/preview.png", caption: "Preview of the FoodReview Insights Agent" },
];

const plandoxImagesPt: GalleryImage[] = [
  { src: "/projects/plandox/logo.png", caption: "Plandox" },
  { src: "/projects/plandox/login.png", caption: "Página de Login" },
  { src: "/projects/plandox/cadastro.png", caption: "Página de Cadastro" },
  { src: "/projects/plandox/recuperar_senha.png", caption: "Recuperar Senha" },
  { src: "/projects/plandox/doe_exemplo.png", caption: "Exemplo de DOE" },
];

const plandoxImagesEn: GalleryImage[] = [
  { src: "/projects/plandox/logo.png", caption: "Plandox" },
  { src: "/projects/plandox/login.png", caption: "Login Page of Plandox" },
  { src: "/projects/plandox/cadastro.png", caption: "Registration Page of Plandox" },
  { src: "/projects/plandox/recuperar_senha.png", caption: "Password Recovery Page of Plandox" },
  { src: "/projects/plandox/doe_exemplo.png", caption: "Example of DOE in Plandox" },
];

const analiseRfmImagesPt: GalleryImage[] = [
  { src: "/projects/analise-rfm-ml/tela_principal.png", caption: "Análise de Clusters" },
  { src: "/projects/analise-rfm-ml/guia_segmentos_rfm_1.png", caption: "Segmentos de Clientes" },
  { src: "/projects/analise-rfm-ml/guia_segmentos_rfm_2.png", caption: "Segmentos de Clientes" },
  { src: "/projects/analise-rfm-ml/elbow_curve.png", caption: "Curva do Cotovelo para Clusters" },
];

const analiseRfmImagesEn: GalleryImage[] = [
  { src: "/projects/analise-rfm-ml/tela_principal.png", caption: "Cluster Analysis" },
  { src: "/projects/analise-rfm-ml/guia_segmentos_rfm_1.png", caption: "Customer Segments" },
  { src: "/projects/analise-rfm-ml/guia_segmentos_rfm_2.png", caption: "Customer Segments" },
  { src: "/projects/analise-rfm-ml/elbow_curve.png", caption: "Elbow Curve for Clusters" },
];

const californiaHousingImagesPt: GalleryImage[] = [
  { src: "/projects/california-housing/housing_prices_scatterplot.png", caption: "Preços de Imóveis - Gráfico de Dispersão" },
  { src: "/projects/california-housing/histogram_plots.png", caption: "Histogramas das Features" },
];

const californiaHousingImagesEn: GalleryImage[] = [
  { src: "/projects/california-housing/housing_prices_scatterplot.png", caption: "Housing Prices - Scatter Plot" },
  { src: "/projects/california-housing/histogram_plots.png", caption: "Histograms of Features" },
];

const hansPlusImagesPt: GalleryImage[] = [
  { src: "/projects/hans-plus/hans-mais.png", caption: "Hans+" },

  { src: "/projects/hans-plus/auth/login.jpeg", caption: "Tela de Login" },
  { src: "/projects/hans-plus/auth/register-1.jpeg", caption: "Primeira parte da Tela de Cadastro" },
  { src: "/projects/hans-plus/auth/register-2.jpeg", caption: "Segunda parte da Tela de Cadastro" },
  { src: "/projects/hans-plus/auth/splash.jpeg", caption: "Tela de Splash" },

  { src: "/projects/hans-plus/home/home.jpeg", caption: "Tela Inicial" },

  { src: "/projects/hans-plus/info/info-1.jpeg", caption: "Primeira parte da Tela de Informações sobre a Hanseníase" },
  { src: "/projects/hans-plus/info/info-2.jpeg", caption: "Segunda parte da Tela de Informações sobre a Hanseníase" },
  { src: "/projects/hans-plus/info/info-sinais-e-sintomas.jpeg", caption: "Tela de Informações sobre Sinais e Sintomas" },

  { src: "/projects/hans-plus/profile/perfil.jpeg", caption: "Tela de Perfil" },
  { src: "/projects/hans-plus/profile/perfil-editar-info-conta.jpeg", caption: "Tela de Edição de Informações da Conta"},
  { src: "/projects/hans-plus/profile/perfil-historico.jpeg", caption: "Tela de Histórico de Sintomas"},
  { src: "/projects/hans-plus/profile/saiba-mais.jpeg", caption: "Tela de Saiba Mais"},
  { src: "/projects/hans-plus/profile/sobre-nos-1.jpeg", caption: "Primeira parte da Tela de Sobre Nós"},
  { src: "/projects/hans-plus/profile/sobre-nos-2.jpeg", caption: "Segunda parte da Tela de Sobre Nós"},
];

const hansPlusImagesEn: GalleryImage[] = [
  { src: "/projects/hans-plus/hans-mais.png", caption: "Hans+" },

  { src: "/projects/hans-plus/auth/login.jpeg", caption: "Login Screen" },
  { src: "/projects/hans-plus/auth/register-1.jpeg", caption: "First Part of Registration Screen" },
  { src: "/projects/hans-plus/auth/register-2.jpeg", caption: "Second Part of Registration Screen" },
  { src: "/projects/hans-plus/auth/splash.jpeg", caption: "Splash Screen" },

  { src: "/projects/hans-plus/home/home.jpeg", caption: "Home Screen" },

  { src: "/projects/hans-plus/info/info-1.jpeg", caption: "First Part of Information about Leprosy Screen" },
  { src: "/projects/hans-plus/info/info-2.jpeg", caption: "Second Part of Information about Leprosy Screen" },
  { src: "/projects/hans-plus/info/info-sinais-e-sintomas.jpeg", caption: "Information about Signs and Symptoms Screen" },

  { src: "/projects/hans-plus/profile/perfil.jpeg", caption: "Profile Screen" },
  { src: "/projects/hans-plus/profile/perfil-editar-info-conta.jpeg", caption: "Edit Account Information Screen"},
  { src: "/projects/hans-plus/profile/perfil-historico.jpeg", caption: "Symptom History Screen"},
  { src: "/projects/hans-plus/profile/saiba-mais.jpeg", caption: "Learn More Screen"},
  { src: "/projects/hans-plus/profile/sobre-nos-1.jpeg", caption: "First Part of About Us Screen"},
  { src: "/projects/hans-plus/profile/sobre-nos-2.jpeg", caption: "Second Part of About Us Screen"},
];

const relabImagesPt: GalleryImage[] = [
  { src: "/projects/relab/login.png", caption: "Página de Login" },
];

const relabImagesEn: GalleryImage[] = [
  { src: "/projects/relab/login.png", caption: "Login Page" },
];

const projectsPt: Project[] = [
  {
    slug: "monitora-saude",
    title: "Monitora Saúde",
    shortDesc: "Portal de transparência em saúde do Maranhão com cerca de 50 painéis públicos em Power BI.",
    fullDesc: "Portal de Transparência de Saúde do Maranhão, desenvolvido para gestores e população. A coordenação é responsável pela plataforma e pelo fluxo de cadastro de indicadores — os gestores das áreas técnicas registram as informações descritivas e o link do painel Power BI correspondente, que passa a ser exibido automaticamente. Conta também com canal aberto de sugestões, acessível sem autenticação.",
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
    shortDesc: "Sistema de cadastro de famílias vulneráveis com perspectiva de 400 mil beneficiários em 217 cidades.",
    fullDesc: "Plataforma oficial do Programa Maranhão Livre da Fome, voltada ao cadastro e acompanhamento de famílias em situação de vulnerabilidade nutricional. Registra consultas, classifica famílias via triagem de risco (TRIA) e gera dados para políticas públicas de saúde e alimentação. Em produção desde novembro de 2025, com registros sendo inseridos gradualmente — a expectativa é alcançar 400 mil beneficiários em cerca de 90 mil famílias. Conta com 479 profissionais de saúde e cerca de 400 usuários entre coordenadores, digitadores e equipe da área técnica.",
    tags: ["Laravel", "MySQL", "JavaScript"],
    categories: ["Full Stack"],
    status: "Concluído",
    icon: Layout,
    images: masemfomeImagesPt,
    stats: [
      { label: "Beneficiários Cadastrados", value: "26.4k" },
      { label: "Beneficiários Esperados", value: "400k" },
      { label: "Cidades", value: "217" }
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
    shortDesc: "Sistema com 2FA e RBAC para vigilância epidemiológica hospitalar. +72k casos notificados em 98 unidades.",
    fullDesc: "O RENAVEH-MA (Rede Nacional de Vigilância Epidemiológica Hospitalar — Maranhão) permite às instituições de saúde registrar e acompanhar notificações de doenças e agravos. Vai além das notificações compulsórias, visando a detecção e resposta imediata a Emergências de Saúde Pública (ESP). Em produção desde fevereiro de 2024, o sistema conta com autenticação em dois fatores (2FA), controle granular de acesso por perfis (RBAC) e aproximadamente 270 usuários cadastrados.",
    tags: ["Laravel", "MySQL", "JavaScript"],
    categories: ["Full Stack"],
    status: "Concluído",
    icon: Database,
    images: renavehImagesPt,
    stats: [
      { label: "Casos Notificados", value: "+72k" },
      { label: "Hospitais", value: "98" },
      { label: "Usuários", value: "270" }
    ],
    links: [
      { type: "live", url: "https://renaveh.saude.ma.gov.br/" },
      { type: "lock", url: "#", label: "Código Confidencial" }
    ],
  },
  {
    slug: "sishans",
    title: "SISHANS - Sistema de Hanseníase",
    shortDesc: "Sistema de registro e acompanhamento de casos de hanseníase com 5.6k pacientes em 50 municípios.",
    fullDesc: "O SISHANS (Sistema de Hanseníase) permite às equipes de saúde registrar questionários diagnósticos e acompanhar casos suspeitos, facilitando a notificação precoce e a coleta de dados para ações de prevenção. Em produção desde janeiro de 2026, já aplicou 5.5k questionários em 50 municípios do Maranhão. Segue os padrões institucionais com 2FA e controle granular de acesso por perfis (RBAC).",
    tags: ["Laravel", "PostgreSQL", "JavaScript"],
    categories: ["Full Stack"],
    status: "Concluído",
    icon: Database,
    images: sishansImagesPt,
    stats: [
      { label: "Pacientes", value: "5.6k" },
      { label: "Questionários", value: "5.5k" },
      { label: "Municípios", value: "50" }
    ],
    links: [
      { type: "live", url: "https://sishans.saude.ma.gov.br/" },
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
      { type: "apk", url: "/downloads/hans-plus.apk", label: "APK Android" }
    ]
  },
  {
    slug: "relab",
    title: "RELAB — Rede Laboratorial",
    shortDesc: "Plataforma de cadastro de laboratórios na rede do LACEN-MA com integração automática à API do CNES.",
    fullDesc: "O RELAB permite o cadastro de laboratórios na Rede do Laboratório Central de Saúde Pública do Maranhão (LACEN-MA). A plataforma integra-se à API do CNES (Cadastro Nacional de Estabelecimentos de Saúde) para preenchimento automático dos dados durante o cadastro. O fluxo contempla: o gestor cadastra o laboratório e o responsável técnico; o responsável técnico informa os exames realizados e o quantitativo de funcionários por hora de funcionamento. Sistema atualmente em fase final de homologação.",
    tags: ["Laravel", "PostgreSQL", "React"],
    categories: ["Full Stack"],
    status: "Concluído",
    icon: Database,
    images: relabImagesPt,
    links: [
      { type: "live", url: "https://relab-ioclacen.saude.ma.gov.br/" },
      { type: "lock", url: "#", label: "Código Confidencial" }
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
    shortDesc: "Maranhão health transparency portal with around 50 public Power BI dashboards.",
    fullDesc: "Maranhão Health Transparency Portal, built for managers and the general public. The team is responsible for the platform and the indicator registration flow — technical area managers register descriptive information and the corresponding Power BI dashboard link, which is automatically displayed. Also features an open suggestion channel accessible without authentication.",
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
    shortDesc: "Family registration platform with a target of 400k beneficiaries across 217 cities.",
    fullDesc: "Official platform of the Maranhão Hunger-Free Program, focused on registering and monitoring families in nutritional vulnerability. Records consultations, classifies families through risk screening (TRIA), and generates data for public health and food policies. In production since November 2025, with records being added gradually — the target is 400k beneficiaries across around 90k families. It has 479 health professionals and around 400 users including coordinators, data entry personnel, and technical area staff.",
    tags: ["Laravel", "MySQL", "JavaScript"],
    categories: ["Full Stack"],
    status: "Completed",
    icon: Layout,
    images: masemfomeImagesEn,
    stats: [
      { label: "Registered Beneficiaries", value: "26.4k" },
      { label: "Expected Beneficiaries", value: "400k" },
      { label: "Cities", value: "217" }
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
    shortDesc: "System with 2FA and RBAC for hospital epidemiological surveillance. +72k cases notified in 98 units.",
    fullDesc: "The RENAVEH-MA (National Hospital Epidemiological Surveillance Network — Maranhão) allows health institutions to register and monitor notifications of diseases and injuries. It goes beyond compulsory notifications, aiming for immediate detection and response to Public Health Emergencies (PHE). In production since February 2024, the system features two-factor authentication (2FA), granular role-based access control (RBAC), and approximately 270 registered users.",
    tags: ["Laravel", "MySQL", "JavaScript"],
    categories: ["Full Stack"],
    status: "Completed",
    icon: Database,
    images: renavehImagesEn,
    stats: [
      { label: "Cases Notified", value: "+72k" },
      { label: "Hospitals", value: "98" },
      { label: "Users", value: "270" }
    ],
    links: [
      { type: "live", url: "https://renaveh.saude.ma.gov.br/" },
      { type: "lock", url: "#", label: "Confidential Code" }
    ]
  },
  {
    slug: "sishans",
    title: "SISHANS - Leprosy Information System",
    shortDesc: "System for recording and monitoring leprosy cases with 5.6k patients across 50 municipalities.",
    fullDesc: "SISHANS (Leprosy Information System) enables health teams to register diagnostic questionnaires and monitor suspected cases, supporting early notification and data collection for prevention. Live since January 2026, it has processed 5.5k questionnaires across 50 municipalities in Maranhão. Follows institutional security standards with 2FA and granular role-based access control (RBAC).",
    tags: ["Laravel", "PostgreSQL", "JavaScript"],
    categories: ["Full Stack"],
    status: "Completed",
    icon: Database,
    images: sishansImagesEn,
    stats: [
      { label: "Patients", value: "5.6k" },
      { label: "Questionnaires", value: "5.5k" },
      { label: "Municipalities", value: "50" }
    ],
    links: [
      { type: "live", url: "https://sishans.saude.ma.gov.br/" },
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
      { type: "apk", url: "/downloads/hans-plus.apk", label: "APK Android" }
    ]
  },
  {
    slug: "relab",
    title: "RELAB — Laboratory Network",
    shortDesc: "Platform for registering laboratories in the LACEN-MA network with automatic CNES API integration.",
    fullDesc: "RELAB enables the registration of laboratories in the LACEN-MA (Maranhão Central Public Health Laboratory) network. The platform integrates with the CNES API (National Health Establishment Registry) to automatically fill in unit data during registration. The workflow covers: the manager registers the laboratory and technical manager; the technical manager then registers the exams performed and staff count per shift. Currently in final homologation phase.",
    tags: ["Laravel", "PostgreSQL", "React"],
    categories: ["Full Stack"],
    status: "Completed",
    icon: Database,
    images: relabImagesEn,
    links: [
      { type: "live", url: "https://relab-ioclacen.saude.ma.gov.br/" },
      { type: "lock", url: "#", label: "Confidential Code" }
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
