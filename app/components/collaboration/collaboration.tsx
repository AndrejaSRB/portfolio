import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SOCIAL_LINKS } from "@/app/constants/social";

const Collaboration = () => (
  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 content-padding">
    <p className="text-sm text-muted-foreground">
      Interested in collaborating or just want to chat? Reach out here:
    </p>

    <div className="flex gap-4">
      <a
        href={SOCIAL_LINKS.TWITTER}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct message Andreja on X"
        className="inline-flex items-center gap-2 px-4 py-2 text-xs lg:text-sm font-medium rounded-lg border border-border hover:border-primary hover:text-primary transition"
      >
        <FaXTwitter className="w-3 h-3 lg:w-4 lg:h-4" />
        DM on X
      </a>

      <a
        href={SOCIAL_LINKS.LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect with Andreja on LinkedIn"
        className="inline-flex items-center gap-2 px-4 py-2 text-xs lg:text-sm font-medium rounded-lg border border-border hover:border-primary hover:text-primary transition"
      >
        <FaLinkedin className="w-3 h-3 lg:w-4 lg:h-4" />
        Connect on LinkedIn
      </a>
    </div>
  </div>
);

export default Collaboration;
