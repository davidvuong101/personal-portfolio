import type { JSX } from "react";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import projects from "../data/projects";

function ProjectsSection(): JSX.Element {
  return (
    <Section id="projects">
      <Section.Heading heading="Projects" />
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}

export default ProjectsSection;
