import type { JSX } from "react";
import type { Skill } from "../types";
import Card from "./Card";
import Badge from "./Badge";

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

function SkillCard({ title, skills }: SkillCardProps): JSX.Element {
  return (
    <Card>
      <Card.Heading heading={title} className="mb-10" />
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <Badge
              key={index}
              className="bg-gray-300 transition hover:scale-105"
            >
              <Icon />
              {skill.name}
            </Badge>
          );
        })}
      </div>
    </Card>
  );
}

export default SkillCard;
