import { WorkListItem, type WorkItem } from "./WorkListItem";

const workItems: WorkItem[] = [
  {
    company: "Biconomy",
    logoSrc: "/comapnies/Biconomy.webp",
    role: "Senior Frontend Engineer",
    years: "2024 - today",
  },
  {
    company: "Pooky",
    logoSrc: "/comapnies/pooky.jpeg",
    role: "Senior Frontend Engineer",
    years: "2022 - 2024",
  },
  {
    company: "Torchlight Technology Group",
    logoSrc: "/comapnies/TTG.png",
    role: "Frontend Engineer",
    years: "2020 - 2022",
  },
  {
    company: "Scripttic",
    logoSrc: "/comapnies/scripttic.png",
    role: "Frontend Engineer",
    years: "2019 - 2020",
  },
  {
    company: "OpenRatio",
    logoSrc: "/comapnies/OR.png",
    role: "Frontend Developer",
    years: "2018 - 2019",
  },
];

export function WorkList() {
  return (
    <aside className="rounded-2xl lg:border lg:border-border/25 p-4 lg:p-5 lg:max-w-xl w-full mx-auto">
      <h2 className="flex items-center gap-2 text-base font-semibold mb-2 text-primary">
        Work
      </h2>
      <ul className="divide-y divide-border/30">
        {workItems.map((item) => (
          <WorkListItem key={item.company} {...item} />
        ))}
      </ul>
    </aside>
  );
}
