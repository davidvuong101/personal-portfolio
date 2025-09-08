import type { JSX } from "react";
import aboutData from "../data/about";
import { frontendSkills, backendSkills } from "../data/skills";

function AboutSection(): JSX.Element {
  return (
    <div className="container mx-auto mt-20 px-15" id="about">
      <h2 className="font-poppins text-primary ml-0.5 text-2xl font-semibold tracking-widest">
        ABOUT
      </h2>
      <h3 className="text-dark-text font-poppins mt-3 text-4xl font-semibold">
        Some Info About Me
      </h3>
      {aboutData.paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="font-inter text-dark-text/90 pt-5 text-lg leading-relaxed"
        >
          {paragraph}
        </p>
      ))}
      <h3 className="text-dark-text font-poppins mt-10 text-2xl font-semibold">
        My Skills
      </h3>
      <p className="font-inter text-dark-text/90 pt-5 text-lg leading-relaxed">
        <span className="text-dark-text font-bold">Frontend: </span>
        {frontendSkills.map(
          (skill, index) =>
            skill.name + (index !== frontendSkills.length - 1 ? " | " : ""),
        )}
      </p>
      <p className="font-inter text-dark-text/90 pt-2 text-lg leading-relaxed">
        <span className="text-dark-text font-bold">Backend: </span>
        {backendSkills.map(
          (skill, index) =>
            skill.name + (index !== backendSkills.length - 1 ? " | " : ""),
        )}
      </p>
    </div>
  );
}

export default AboutSection;
