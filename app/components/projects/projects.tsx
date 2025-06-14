import { type Project } from "@/types/project";

import ProjectCard from "./project-card";

const projects: Project[] = [
  {
    title: "HyperSignals",
    description:
      "HyperSignals is a real-time crypto insights dApp where users can track trading signals, monitor market sentiment, and place onchain orders.",
    link: "https://hypersignals.ai/",
  },
  {
    title: "NOMY",
    description:
      "NOMY is an AI-powered Web3 assistant that lets users interact with dApps through natural language. It supports both EVM and Solana and executes onchain actions via chat.",
    link: "https://www.biconomy.io/",
  },
  {
    title: "MekaApes Game",
    description:
      "MekaApes Genesis is a turn-based NFT strategy game on Ethereum that generated over $2M in volume and sold 100K+ NFTs. Built with smart contract integration and GameFi mechanics.",
    link: "https://docs.oogaverse.com/introduction/mekaapes-game-stage-2",
  },
  {
    title: "Pooky",
    description:
      "Pooky is a Web3 football prediction game where players use NFT collectibles to forecast match outcomes and earn rewards — a risk-free alternative to sports betting.",
    link: "https://whitepaper.pooky.gg/",
  },
];

export function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
