import type { JSX } from "react";
import SkillCard from "../components/SkillCard";
import Section from "../components/Section";
import { backendSkills, frontendSkills } from "../data/skills";

function SkillsSection(): JSX.Element {
  return (
    <Section id="skills">
      <div className="grid gap-8 md:grid-cols-2">
        <SkillCard title="Frontend" skills={frontendSkills} />
        <SkillCard title="Backend" skills={backendSkills} />
      </div>
    </Section>
  );
}

export default SkillsSection;
