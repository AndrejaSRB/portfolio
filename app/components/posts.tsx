import { getBlogPosts } from "../blog/utils";

import BlogPostCard from "./blog-post-card";

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <div className="flex flex-col ">
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
          <BlogPostCard key={post.slug} post={post} />
        ))}
    </div>
  );
}
