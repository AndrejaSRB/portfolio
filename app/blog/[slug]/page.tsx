import { notFound } from "next/navigation";

import { Separator } from "@/components/ui/separator";

import { baseUrl } from "../../sitemap";
import { BlogCta } from "../components/blog-cta";
import { CustomMDX } from "../components/mdx";
import { formatDate, getBlogPosts } from "../utils";
import { use } from "react";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// Helper function to highlight words in text
const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="text-white">{children}</span>
);

export default function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="text-zinc-400 content-padding">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />

      <h1 className="title font-semibold text-2xl tracking-tighter text-white">
        {post.metadata.title}
      </h1>

      <div className="flex items-center gap-2 mt-2 mb-8 text-sm">
        <span>{formatDate(post.metadata.publishedAt)}</span>

        {post.metadata.readingTime && (
          <>
            <span className="text-zinc-600">|</span>

            <span>{post.metadata.readingTime}</span>
          </>
        )}
      </div>

      <article className="prose text-zinc-400 prose-headings:text-white prose-strong:text-white max-w-none">
        <CustomMDX source={post.content} components={{ Highlight }} />
      </article>

      <Separator className="mt-6 mb-4" />

      <BlogCta />
    </section>
  );
}
