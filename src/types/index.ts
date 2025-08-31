import type { IconType } from "react-icons";

interface NavLink {
  name: string;
  href: string;
}

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  type: "personal" | "professional" | "other";
}

interface Skill {
  name: string;
  icon: IconType;
}

interface SiteConfig {
  name: string;
  tagline: string;
  navLinks: NavLink[];
}

interface AboutData {
  paragraphs: string[];
}

interface Contact {
  label: string;
  href: string;
  icon: IconType;
}

export type {
  NavLink,
  Experience,
  Project,
  Skill,
  SiteConfig,
  AboutData,
  Contact,
};
