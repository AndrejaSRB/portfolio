import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-lg mb-8 tracking-tighter text-zinc-400">
        Blog
      </h1>
      <BlogPosts />
    </section>
  );
}
