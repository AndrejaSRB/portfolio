import { formatDate } from "../blog/utils";

import Link from "next/link";
import { type getBlogPosts } from "../blog/utils";
import { ChevronRight } from "lucide-react";

interface BlogPostCardProps {
  post: ReturnType<typeof getBlogPosts>[number];
}

function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="rounded-2xl p-4 lg:p-5 w-full flex flex-col gap-2 hover:bg-card transition-all duration-300 group md:cursor-pointer">
        <div className="flex items-center gap-2">
          <span className="text-xs lg:text-sm text-neutral-400">
            {formatDate(post.metadata.publishedAt, false)}
          </span>
          <span className="text-xs lg:text-sm text-neutral-400">•</span>
          <span className="text-xs lg:text-sm text-neutral-400">
            {post.metadata.readingTime}
          </span>
        </div>
        <h2 className="text-base font-semibold text-neutral-100 leading-tight">
          {post.metadata.title}
        </h2>
        {post.metadata.summary && (
          <p className="text-sm text-neutral-400 font-normal">
            {post.metadata.summary}
          </p>
        )}
        <span
          className="text-sm font-medium text-primary flex items-center gap-1 w-fit group"
          aria-label={`Read post: ${post.metadata.title}`}
        >
          Read post{" "}
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </article>
    </Link>
  );
}

export default BlogPostCard;
