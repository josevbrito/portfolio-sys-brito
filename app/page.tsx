import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ContactSection } from "./components/sections/ContactSection";

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