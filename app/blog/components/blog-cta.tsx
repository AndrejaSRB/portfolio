import Link from "next/link";

export function BlogCta() {
  return (
    <span>
      Thanks for reading! If you enjoyed this post, you can follow me on{" "}
      <Link
        href="https://x.com/0xAndreja"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white underline decoration-white hover:decoration-primary cursor-pointer duration-75"
      >
        Twitter
      </Link>{" "}
      for more updates. If you&apos;d like to collaborate, feel free to contact
      me via{" "}
      <Link
        href="https://www.linkedin.com/in/andreja-kojadinovic/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white underline decoration-white hover:decoration-primary cursor-pointer duration-75"
      >
        LinkedIn
      </Link>{" "}
      or Twitter.
    </span>
  );
}
