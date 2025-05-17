import { BlogPosts } from "../components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-lg mb-8 tracking-tighter text-primary content-padding">
        Blog
      </h1>
      å
      <BlogPosts />
    </section>
  );
}
