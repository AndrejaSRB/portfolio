import { SOCIAL_LINKS } from "@/app/constants/social";
import Link from "next/link";

export function BlogCta() {
  return (
    <section>
      <div className="flex flex-col gap-1">
        <p>
          Thanks for reading — I share more thoughts like this on{" "}
          <Link
            href={SOCIAL_LINKS.TWITTER}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 decoration-white hover:decoration-primary cursor-pointer duration-200 transition-all"
          >
            Twitter
          </Link>
          .
        </p>

        <p>
          Working on something interesting? Reach out via DM or{" "}
          <Link
            href={SOCIAL_LINKS.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 decoration-white hover:decoration-primary cursor-pointer duration-200 transition-all"
          >
            LinkedIn
          </Link>
          &nbsp;— always happy to connect.
        </p>
      </div>
    </section>
  );
}
