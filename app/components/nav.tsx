import Link from "next/link";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SOCIAL_LINKS } from "@/app/constants/social";

export function Navbar() {
  return (
    <header
      className="mb-10 tracking-tight w-full content-padding"
      role="banner"
    >
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row justify-between items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="transition-all flex align-middle relative py-1 text-xl font-bold"
            aria-label="Home"
          >
            <span className="mr-1">Andreja</span>
            <span className="hidden md:inline"> Kojadinovic</span>
          </Link>

          <div
            className="flex space-x-4"
            role="navigation"
            aria-label="Social media links"
          >
            <a
              href={SOCIAL_LINKS.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
              aria-label="Follow me on X (formerly Twitter)"
            >
              <FaXTwitter size={20} aria-hidden="true" />
            </a>
            <a
              href={SOCIAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
              aria-label="Connect with me on LinkedIn"
            >
              <FaLinkedin size={20} aria-hidden="true" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
