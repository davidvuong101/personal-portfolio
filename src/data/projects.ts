import type { Project } from "../types";

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my skills, projects, and experience. This is the site you are on right now.",
    tags: ["React", "TypeScript", "Tailwind"],
    type: "personal",
  },
  {
    title: "AI Consulting for Cucumber Growing",
    description:
      "Practera program in which I provided consulting for a cucumber grower about integrating AI solutions into controlled environment cucumber growing.",
    tags: ["AI", "Consulting"],
    type: "professional",
  },
  {
    title: "StandUpFlow",
    description:
      "During the ForgeHACK 2025 hackathon, I developed a Rovo agent to provide insights on Jira issues.",
    tags: ["Node.js", "Atlassian Forge"],
    type: "other",
    github: "https://github.com/KimberlieFu/Rosas-Flamingo",
  },
  {
    title: "GraphRAG University Policy Chatbot",
    description:
      "I worked on the implementation of GraphRAG architecture for a university policy chatbot.",
    tags: ["Python", "Langchain", "Neo4j"],
    type: "professional",
  },
];

export default projects;
