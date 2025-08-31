import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import type { Skill } from "../types";

const frontendSkills: Skill[] = [
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
];

const backendSkills: Skill[] = [
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "Python", icon: FaPython },
  { name: "Java", icon: FaJava },
  { name: "PostgreSQL", icon: FaDatabase },
];

export { frontendSkills, backendSkills };
