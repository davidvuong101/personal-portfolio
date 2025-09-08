import type { JSX } from "react";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import WorkSection from "./sections/WorkSection";
import ContactSection from "./sections/ContactSection";

function App(): JSX.Element {
  return (
    <div className="bg-background">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </div>
  );
}

export default App;
