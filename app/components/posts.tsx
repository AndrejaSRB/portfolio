import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

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
            className="w-full p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 relative group transition-colors bg-neutral-900 hover:bg-neutral-800/80"
            href={`/blog/${post.slug}`}
          >
            <div className="absolute top-4 right-4 text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
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
            <h2 className="font-medium text-xl text-neutral-900 dark:text-neutral-100 tracking-tight pr-8">
              {post.metadata.title}
            </h2>
            <div className="flex items-center gap-2 mt-2 text-sm text-neutral-600 dark:text-neutral-400">
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
