import { type Project } from "@/types/project";

import ProjectCard from "./project-card";

const projects: Project[] = [
  {
    title: "traceguard",
    description:
      "A developer tool for monitoring all RPC requests with human-readable error decoding, smart contract insights, and full trace visibility across EVM chains.",
    link: "https://traceguard-landing.vercel.app/",
  },
  {
    title: "mekaapes-game",
    description:
      "MekaApes Genesis: An in-depth GameFi NFT strategy game on Ethereum that generated over $2M in revenue and sold over 100,000 NFTs.",
    link: "https://github.com/AndrejaSRB/mekaapes-game",
  },
];

export function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
