import { type Project } from "@/types/project";

import ProjectCard from "./project-card";

const projects: Project[] = [
  {
    title: "HyperSignals",
    description:
      "HyperSignals turns real-time market data into actionable trading insights by tracking top traders, whale flows, and KOL sentiment across Hyperliquid",
    link: "https://hypersignals.ai/",
  },
  {
    title: "Traceguard",
    description:
      "Traceguard helps developers trace and debug RPC requests across EVM chains with human-readable errors and smart contract insights.",
    link: "https://traceguard-landing.vercel.app/",
  },
  {
    title: "MekaApes Game",
    description:
      "MekaApes Genesis: An in-depth GameFi NFT strategy game on Ethereum that generated over $2M in revenue and sold over 100,000 NFTs.",
    link: "https://docs.oogaverse.com/introduction/mekaapes-game-stage-2",
  },
  {
    title: "Pooky",
    description:
      "Pooky is a Web3 football prediction game where players use collectible NFTs called Pookyballs to forecast match scores and earn rewards, offering a risk-free alternative to traditional sports betting.",
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
