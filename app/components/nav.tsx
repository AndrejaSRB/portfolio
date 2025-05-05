import Link from "next/link";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "https://vercel.com/templates/next.js/portfolio-starter-kit": {
    name: "deploy",
  },
};

export function Navbar() {
  return (
    <aside className="mb-10 tracking-tight w-full">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row justify-between items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <Link
            href="/"
            className="transition-all flex align-middle relative py-1 text-2xl font-bold"
          >
            <span className="text-neutral-800 dark:text-neutral-200 mr-1">
              Andreja
            </span>
            <span className="hidden md:inline text-neutral-800 dark:text-neutral-200">
              {" "}
              Kojadinovic
            </span>
          </Link>

          <div className="flex space-x-4">
            <a
              href="https://x.com/0xAndreja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neutral-400 transition-colors duration-300"
              aria-label="X profile"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/andreja-kojadinovic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neutral-400 transition-colors duration-300"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
}
