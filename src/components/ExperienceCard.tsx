import type { JSX } from "react";
import type { Experience } from "../types";
import Card from "./Card";

interface ExperienceCardProps {
  exp: Experience;
}

function ExperienceCard({ exp }: ExperienceCardProps): JSX.Element {
  return (
    <Card>
      <Card.Heading heading={exp.role} className="mb-2 text-left" />
      <p className="mb-6 text-sm text-gray-300 italic">
        {exp.company} | {exp.duration}
      </p>
      <p className="text-md">{exp.description}</p>
    </Card>
  );
}

export default ExperienceCard;
