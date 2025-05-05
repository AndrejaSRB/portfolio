import Link from "next/link";

type Project = {
  title: string;
  description: string;
  link: string;
};

export function Projects() {
  const projects: Project[] = [
    {
      title: "neural-canvas",
      description:
        "A deep learning framework for generating art using state-of-the-art neural style transfer algorithms",
      link: "https://github.com/username/neural-canvas",
    },
    {
      title: "quantum-sim",
      description:
        "Quantum computing simulator with visual interface for designing and testing quantum algorithms",
      link: "https://github.com/username/quantum-sim",
    },
    {
      title: "eco-tracker",
      description:
        "Mobile app for tracking personal carbon footprint with actionable recommendations for reducing environmental impact",
      link: "https://github.com/username/eco-tracker",
    },
    {
      title: "melody-forge",
      description:
        "AI-powered music composition tool that assists musicians in creating unique melodies and chord progressions",
      link: "https://github.com/username/melody-forge",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {projects.map((project) => (
        <Link
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lgrelative group transition-colors"
        >
          <h2 className="font-medium text-lg text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:underline decoration-2 decoration-neutral-400 dark:decoration-neutral-500 transition-all duration-300">
            {project.title}
          </h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
