import type { JSX } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";

function App(): JSX.Element {
  return (
    <div className="bg-gradient-to-b from-black to-zinc-900">
      <Navbar />
      <main className="mx-auto max-w-5xl">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
