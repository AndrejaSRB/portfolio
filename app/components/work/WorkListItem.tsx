import Image from "next/image";

export type WorkItem = {
  company: string;
  logoSrc: string;
  role: string;
  years: string;
};

/**
 * Renders a single work experience item with logo, company, role, and years.
 */
export function WorkListItem({ company, logoSrc, role, years }: WorkItem) {
  return (
    <li className="flex items-center gap-3 py-2 md:py-3 last:pb-0">
      <div className="flex-shrink-0 w-9 h-9 rounded bg-muted flex items-center justify-center overflow-hidden border border-border">
        <Image
          src={logoSrc}
          alt={company + " logo"}
          width={36}
          height={36}
          className="object-contain w-9 h-9"
          priority={false}
        />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="font-medium text-sm truncate text-white">
          {company}
        </span>
        <span className="text-xs text-muted-foreground truncate">{role}</span>
      </div>
      <span className="ml-auto text-xs text-muted-foreground whitespace-nowrap">
        {years}
      </span>
    </li>
  );
}
