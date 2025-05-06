import Link from "next/link";

type Project = {
  title: string;
  description: string;
  link: string;
};

export function Projects() {
  const projects: Project[] = [
    {
      title: "traceguard",
      description:
        "A developer tool for monitoring all RPC requests with human-readable error decoding, smart contract insights, and full trace visibility across EVM chains.",
      link: "https://traceguard-landing.vercel.app/",
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
