import Link from "next/link";

import { type Project } from "@/types/project";

const ProjectCard = ({ project }: { project: Project }) => (
  <Link
    key={project.title}
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block rounded-lgrelative group transition-colors p-4 md:p-5 md:hover:bg-card md:rounded-2xl"
  >
    <h2 className="font-medium text-base lg:text-lg text-white tracking-tight group-hover:text-primary decoration-2 transition-all duration-300 ">
      {project.title}
    </h2>

    <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
  </Link>
);

export default ProjectCard;
