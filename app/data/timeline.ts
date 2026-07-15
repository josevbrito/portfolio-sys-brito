import type { TimelineItem } from "../types";

const timelinePt: TimelineItem[] = [
  {
    date: "08/2025 - Atual",
    title: "Engenheiro de Software",
    org: "Secretaria de Estado da Saúde do Maranhão",
    desc: "Desenvolvimento de sistemas públicos utilizando Laravel, React e PostgreSQL/MySQL. Auxílio técnico a estagiários.",
    type: "work"
  },
  {
    date: "04/2025 - Atual",
    title: "Mestrado em Ciência da Computação",
    org: "Universidade Federal do Maranhão (UFMA)",
    desc: "Pesquisa focada em Aprendizado de Máquina e problemas de otimização combinatória e sistemas inteligentes.",
    type: "education"
  },
  {
    date: "06/2025 - 08/2025",
    title: "Engenheiro de Software e IA",
    org: "Lab. de Análise de Dados e Inteligência Artificial (UFMA)",
    desc: "Modernização do Plandox (Monolito p/ Microsserviços) usando Python/FastAPI e implementação de modelos de ML para biodiesel.",
    type: "work"
  },
  {
    date: "06/2025 - Atual",
    title: "Pós-Graduação em DevOps",
    org: "Instituto Federal de Mato Grosso (IFMT)",
    desc: "Ênfase em CI/CD, automação, infraestrutura como código, Docker e Kubernetes.",
    type: "education"
  },
  {
    date: "09/2023 - 06/2025",
    title: "Engenheiro de Software Junior",
    org: "Secretaria de Estado da Saúde do Maranhão",
    desc: "Desenvolvimento e manutenção de softwares de saúde pública usando Laravel, JavaScript, PostgreSQL/MySQL e Python para dados.",
    type: "work"
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
    title: "Software Engineer",
    org: "State Health Secretariat (SES-MA)",
    desc: "Development of public systems using Laravel, React, and PostgreSQL/MySQL. Mentoring interns.",
    type: "work"
  },
  {
    date: "04/2025 - Current",
    title: "M.Sc. in Computer Science",
    org: "Federal University of Maranhão (UFMA)",
    desc: "Research focused on Machine Learning and complex combinatorial optimization problems and intelligent systems.",
    type: "education"
  },
  {
    date: "06/2025 - 08/2025",
    title: "AI & Software Engineer",
    org: "Data Analysis and Artificial Intelligence Lab (UFMA)",
    desc: "Modernizing Plandox (Monolith to Microservices) with Python/FastAPI and implementing ML models for biodiesel.",
    type: "work"
  },
  {
    date: "06/2025 - Current",
    title: "Postgrad in DevOps",
    org: "Federal Institute of Mato Grosso (IFMT)",
    desc: "Focus on CI/CD, automation, infrastructure as code, Docker, and Kubernetes.",
    type: "education"
  },
  {
    date: "09/2023 - 06/2025",
    title: "Junior Software Engineer",
    org: "State Health Secretariat (SES-MA)",
    desc: "Development and maintenance of public health software using Laravel, JavaScript, PostgreSQL/MySQL, and Python for data.",
    type: "work"
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
