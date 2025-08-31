import type { JSX } from "react";
import Section from "../components/Section";
import aboutData from "../data/about";

function AboutSection(): JSX.Element {
  return (
    <Section id="about" className="pb-2">
      <Section.Heading heading="About Me" />
      {aboutData.paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      ))}
    </Section>
  );
}

export default AboutSection;
