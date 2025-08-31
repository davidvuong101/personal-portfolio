import ExperienceCard from "../components/ExperienceCard";
import Section from "../components/Section";
import experiences from "../data/experiences";

function ExperienceSection() {
  return (
    <Section id="experience">
      <Section.Heading heading="Experience" />
      <div className="grid gap-6 md:grid-cols-1">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
      </div>
    </Section>
  );
}

export default ExperienceSection;
