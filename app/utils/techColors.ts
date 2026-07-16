type TechColor = { color: string };

const techColorMap: Record<string, TechColor> = {
  // Web Frameworks
  "Laravel":       { color: "#FF2D20" },
  "Next.js":       { color: "#FFFFFF" },
  "React":         { color: "#61DAFB" },
  "React Native":  { color: "#61DAFB" },
  "Vue.js":        { color: "#4FC08D" },
  "Flask":         { color: "#AAAAAA" },
  "FastAPI":       { color: "#009688" },
  "Express":       { color: "#8CC84B" },

  // Languages
  "JavaScript":    { color: "#F7DF1E" },
  "TypeScript":    { color: "#3178C6" },
  "Python":        { color: "#3776AB" },
  "PHP":           { color: "#777BB4" },
  "Dart":          { color: "#00B4AB" },

  // Databases
  "MySQL":         { color: "#F29111" },
  "PostgreSQL":    { color: "#336791" },
  "MongoDB":       { color: "#47A248" },
  "NoSQL":         { color: "#47A248" },
  "Firebase":      { color: "#FFCA28" },
  "Redis":         { color: "#DC382D" },

  // Mobile
  "Flutter":       { color: "#54C5F8" },
  "Mobile":        { color: "#54C5F8" },

  // CSS / Styling
  "Tailwind CSS":  { color: "#38BDF8" },
  "CSS":           { color: "#1572B6" },

  // Data Science / AI / ML
  "Power BI":      { color: "#F2C811" },
  "LangChain":     { color: "#1C7C54" },
  "RAG":           { color: "#A78BFA" },
  "LLM":           { color: "#A78BFA" },
  "Machine Learning": { color: "#C084FC" },
  "Scikit-learn":  { color: "#F7931E" },
  "Pandas":        { color: "#E70488" },
  "ML Pipeline":   { color: "#A78BFA" },
  "TensorFlow":    { color: "#FF6F00" },
  "PyTorch":       { color: "#EE4C2C" },

  // DevOps / Infra
  "Docker":        { color: "#2496ED" },
  "Microservices": { color: "#64B5F6" },
  "AWS":           { color: "#FF9900" },

  // IoT / Distributed Systems
  "MQTT":          { color: "#660066" },
  "ThingsBoard":   { color: "#2F8B57" },
  "ESP32":         { color: "#E7352C" },
  "IoT":           { color: "#00BCD4" },

  // Misc
  "next-intl":     { color: "#4F46E5" },
  "GraphQL":       { color: "#E10098" },
};

export function getTechColor(tag: string): Record<string, string> {
  const tech = techColorMap[tag];
  if (!tech) return {};
  const hex = tech.color;
  return {
    color: hex,
    backgroundColor: hex + "1a",
    borderColor: hex + "40",
  };
}
