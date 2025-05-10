import Link from 'next/link';

import { formatDate, getBlogPosts } from '../blog/utils';

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <div className="flex flex-col space-y-4">
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map(post => (
          <Link
            key={post.slug}
            className="w-full p-4 bg-card border rounded-md hover:border-primary/60 transition-all duration-300 hover:bg-background"
            href={`/blog/${post.slug}`}
          >
            <div className="absolute top-4 right-4 transition-colors text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </div>
            <h2 className="text-xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
              {post.metadata.title}
            </h2>
            <div className="flex gap-2 items-center mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              <span>{formatDate(post.metadata.publishedAt, false)}</span>
              {post.metadata.readingTime && (
                <>
                  <span className="text-neutral-300 dark:text-neutral-700">|</span>
                  <span>{post.metadata.readingTime}</span>
                </>
              )}
            </div>
          </Link>
        ))}
    </div>
  );
}
