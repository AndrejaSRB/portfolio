import Link from 'next/link';

export function BlogCta() {
  return (
    <span>
      Thanks for reading! If you enjoyed this post, you can{' '}
      <Link
        href="https://x.com/0xAndreja"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-primary/80 cursor-pointer underline decoration-primary/50 duration-75"
      >
        follow me on Twitter
      </Link>{' '}
      for more updates.
    </span>
  );
}
