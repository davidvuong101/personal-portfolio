import type { JSX } from "react";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";

function App(): JSX.Element {
  return (
    <div className="bg-background">
      <HeroSection />
      <AboutSection />
      <SkillsSection /> {/* TODO: replace with work */}
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
