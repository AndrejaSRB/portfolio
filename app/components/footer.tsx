import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SOCIAL_LINKS } from "@/app/constants/social";

export default function Footer() {
  return (
    <footer
      className="mb-16 mt-8 content-padding flex items-center justify-between"
      role="contentinfo"
    >
      <nav aria-label="Social media links">
        <ul className="flex space-x-4 list-none">
          <li>
            <a
              href={SOCIAL_LINKS.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow me on X (formerly Twitter)"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaXTwitter size={20} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={SOCIAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with me on LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaLinkedin size={20} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={SOCIAL_LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Check out my GitHub profile"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaGithub size={20} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </nav>

      <div>
        <Link href="/" aria-label="Return to homepage">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Andreja{" "}
            <span className="hidden md:inline">Kojadinovic</span>
          </p>
        </Link>
      </div>
    </footer>
  );
}
