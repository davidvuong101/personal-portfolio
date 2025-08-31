import type { JSX } from "react";
import type { Project } from "../types";
import Card from "./Card";
import Badge from "./Badge";

interface ProjectCardProps {
  project: Project;
}

type ButtonProps = {
  link: string;
  text: string;
  outline?: boolean;
};

function Button({ link, text, outline = false }: ButtonProps): JSX.Element {
  const buttonStyle = outline ? "bg-none ring-1 ring-blue-700" : "bg-blue-700";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonStyle} flex items-center justify-center rounded-xl px-3 py-1 text-sm text-gray-200 transition hover:bg-blue-800`}
    >
      {text}
    </a>
  );
}

function getBadgeColour(projectType: string): string | undefined {
  if (projectType === "personal") {
    return "bg-blue-600";
  }

  if (projectType === "professional") {
    return "bg-green-600";
  }

  if (projectType === "other") {
    return "bg-indigo-600";
  }
}

function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  const badgeColour = getBadgeColour(project.type);

  return (
    <Card>
      <div className="mb-8 flex items-center justify-between gap-4">
        <Card.Heading heading={project.title} />
        <Badge className={`text-sm text-white ${badgeColour}`}>
          {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
        </Badge>
      </div>
      <p className="mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <Badge key={i} className="bg-gray-300 text-sm opacity-80">
            {tag}
          </Badge>
        ))}
      </div>
      {project.github || project.live ? (
        <div className="mt-12 flex gap-4">
          {project.github && (
            <Button link={project.github} text="GitHub Link" />
          )}
          {project.live && (
            <Button link={project.live} text="Live Demo" outline />
          )}
        </div>
      ) : null}
    </Card>
  );
}

export default ProjectCard;
