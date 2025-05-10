import Link from "next/link";

import { formatDate, getBlogPosts } from "../blog/utils";

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <div className="flex flex-col space-y-4">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="w-full p-4 bg-card border rounded-md hover:border-primary/60 transition-all duration-300 hover:bg-background relative"
            href={`/blog/${post.slug}`}
          >
            <h2 className="text-base lg:text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
              {post.metadata.title}
            </h2>
            <div className="flex gap-2 items-center mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              <span>{formatDate(post.metadata.publishedAt, false)}</span>
              {post.metadata.readingTime && (
                <>
                  <span className="text-neutral-300 dark:text-neutral-700">
                    |
                  </span>
                  <span>{post.metadata.readingTime}</span>
                </>
              )}
            </div>
          </Link>
        ))}
    </div>
  );
}
