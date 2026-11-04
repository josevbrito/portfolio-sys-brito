import type { TimelineItem } from "../types";

const timelinePt: TimelineItem[] = [
  {
    date: "08/2025 - Atual",
    title: "Engenheiro de Machine Learning e Software",
    org: "Secretaria de Estado da Saúde do Maranhão",
    desc: "Painel preditivo e analítico da dengue com Machine Learning, desenho da arquitetura estadual de dados em saúde (interoperabilidade com a RNDS via HL7 FHIR R4), tratamento de duplicidades e painel de qualidade de dados do SIAPS. Lançamento do RELAB e evolução do SISHANS.",
    type: "work"
  },
  {
    date: "04/2025 - Atual",
    title: "Mestrado em Ciência da Computação",
    org: "Universidade Federal do Maranhão (UFMA)",
    desc: "Pesquisa em Machine Learning, Redes Neurais, Otimização Bayesiana e Programação Genética Cartesiana aplicados ao design de circuitos genéticos. Primeiro autor de artigo apresentado no BRACIS 2026 e publicado pela Springer.",
    type: "education"
  },
  {
    date: "06/2025 - Atual",
    title: "Desenvolvedor de Software e Machine Learning",
    org: "DARTILAB - Lab. de Análise de Dados e IA (UFMA)",
    desc: "PlanDox 2.0: migração de monolito para serviços, backend em Python/FastAPI com rotinas estatísticas (ANOVA, regressão, DoE) e pipelines scikit-learn para predição da qualidade do biodiesel.",
    type: "work"
  },
  {
    date: "06/2025 - Atual",
    title: "Pós-Graduação em Engenharia DevOps",
    org: "Instituto Federal de Mato Grosso (IFMT)",
    desc: "Ênfase em CI/CD, automação, infraestrutura como código, Docker e Kubernetes.",
    type: "education"
  },
  {
    date: "01/2024 - 08/2025",
    title: "Desenvolvedor de Software",
    org: "Secretaria de Estado da Saúde do Maranhão",
    desc: "Sistemas de saúde pública de ponta a ponta: RENAVEH-MA (mais de 80 mil notificações), Monitora Saúde (cerca de 50 painéis públicos) e Maranhão Livre da Fome. Tratamento e validação de dados com Python e SQL. Acompanhamento de dois estagiários.",
    type: "work"
  },
  {
    date: "2024 - Atual",
    title: "Engenharia da Computação",
    org: "Universidade Federal do Maranhão (UFMA)",
    desc: "Formação em hardware, sistemas embarcados e sistemas distribuídos, base de projetos como o monitoramento de quedas com IoT.",
    type: "education"
  },
  {
    date: "03/2024 - 07/2024",
    title: "Monitor de Projeto e Desenv. de Software",
    org: "Universidade Federal do Maranhão (UFMA)",
    desc: "Mentoria técnica para 27 alunos em engenharia de software, arquitetura de sistemas e metodologias ágeis.",
    type: "work"
  },
  {
    date: "01/2021 - 09/2024",
    title: "Bacharelado em Ciência e Tecnologia",
    org: "Universidade Federal do Maranhão (UFMA)",
    desc: "Fundamentação multidisciplinar integrando conceitos de matemática, física, computação e estatística. TCC nota 10 (App Hans+).",
    type: "education"
  },
  {
    date: "09/2023 - 12/2023",
    title: "Estagiário de Desenvolvimento de Software",
    org: "Secretaria de Estado da Saúde do Maranhão",
    desc: "Backend de dados de mais de cinco painéis da primeira versão do Monitora Saúde: consultas SQL e estruturas JSON em PHP para o frontend.",
    type: "work"
  },
  {
    date: "05/2023 - 09/2023",
    title: "Analista de Dados",
    org: "Humana Saúde MA",
    desc: "Utilização de dashboards Power BI existentes para extração de relatórios de vendas e análise de KPIs.",
    type: "work"
  }
];

const timelineEn: TimelineItem[] = [
  {
    date: "08/2025 - Current",
    title: "Machine Learning & Software Engineer",
    org: "State Health Secretariat of Maranhão (SES-MA)",
    desc: "Predictive and analytical dengue dashboard with Machine Learning, design of the statewide health data architecture (RNDS interoperability via HL7 FHIR R4), duplicate resolution and the SIAPS data quality dashboard. Launched RELAB and evolved SISHANS.",
    type: "work"
  },
  {
    date: "04/2025 - Current",
    title: "M.Sc. in Computer Science",
    org: "Federal University of Maranhão (UFMA)",
    desc: "Research on Machine Learning, Neural Networks, Bayesian Optimization and Cartesian Genetic Programming applied to genetic circuit design. First author of a paper presented at BRACIS 2026 and published by Springer.",
    type: "education"
  },
  {
    date: "06/2025 - Current",
    title: "Software & Machine Learning Developer",
    org: "DARTILAB - Data Analysis and AI Lab (UFMA)",
    desc: "PlanDox 2.0: monolith-to-services migration, Python/FastAPI backend with statistical routines (ANOVA, regression, DoE) and scikit-learn pipelines for biodiesel quality prediction.",
    type: "work"
  },
  {
    date: "06/2025 - Current",
    title: "Postgrad in DevOps Engineering",
    org: "Federal Institute of Mato Grosso (IFMT)",
    desc: "Focus on CI/CD, automation, infrastructure as code, Docker, and Kubernetes.",
    type: "education"
  },
  {
    date: "01/2024 - 08/2025",
    title: "Software Developer",
    org: "State Health Secretariat of Maranhão (SES-MA)",
    desc: "End-to-end public health systems: RENAVEH-MA (over 80k notifications), Monitora Saúde (around 50 public dashboards) and Maranhão Livre da Fome. Data cleaning and validation with Python and SQL. Mentored two interns.",
    type: "work"
  },
  {
    date: "2024 - Current",
    title: "B.Eng. in Computer Engineering",
    org: "Federal University of Maranhão (UFMA)",
    desc: "Training in hardware, embedded and distributed systems, the basis for projects such as the IoT fall detection system.",
    type: "education"
  },
  {
    date: "03/2024 - 07/2024",
    title: "Software Dev. Teaching Assistant",
    org: "Federal University of Maranhão (UFMA)",
    desc: "Technical mentoring for 27 students in software engineering, system architecture, and agile methodologies.",
    type: "work"
  },
  {
    date: "01/2021 - 09/2024",
    title: "B.Sc. Science & Technology",
    org: "Federal University of Maranhão (UFMA)",
    desc: "Multidisciplinary foundation integrating Math, Physics, Computing, and Statistics. Grade 10 Thesis (Hans+ App).",
    type: "education"
  },
  {
    date: "09/2023 - 12/2023",
    title: "Software Development Intern",
    org: "State Health Secretariat of Maranhão (SES-MA)",
    desc: "Data backend for more than five dashboards in the first version of Monitora Saúde: SQL queries and PHP-generated JSON for the frontend.",
    type: "work"
  },
  {
    date: "05/2023 - 09/2023",
    title: "Data Analyst",
    org: "Humana Saúde MA",
    desc: "Using existing Power BI dashboards to extract sales reports and analyze KPIs.",
    type: "work"
  }
];

export function getTimeline(lang: "pt" | "en"): TimelineItem[] {
  return lang === "pt" ? timelinePt : timelineEn;
}
