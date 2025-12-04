import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import dynamic from "next/dynamic";

// Lazy loaded sections with loading placeholders
const ExperienceSection = dynamic(() => import("./components/sections/ExperienceSection").then(mod => mod.ExperienceSection), {
  loading: () => <div className="h-96 bg-black/50 animate-pulse" />
});

const ProjectsSection = dynamic(() => import("./components/sections/ProjectsSection").then(mod => mod.ProjectsSection), {
  loading: () => <div className="h-96 bg-black/50 animate-pulse" />
});

const ContactSection = dynamic(() => import("./components/sections/ContactSection").then(mod => mod.ContactSection), {
  loading: () => <div className="h-96 bg-black/50 animate-pulse" />
});

export default function Home() {
  return (
    <div className="min-h-screen bg-matrix-gradient text-foreground font-sans selection:bg-primary selection:text-black overflow-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}