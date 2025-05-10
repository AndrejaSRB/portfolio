import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import remarkGfm from 'remark-gfm';
import { highlight } from 'sugar-high';

import { createElement } from 'react';

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  const headers = data.headers.map((header, index) => <th key={index}>{header}</th>);
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props: { href: string; children: React.ReactNode }) {
  const href = props.href;

  if (href.startsWith('/')) {
    return <Link {...props}>{props.children}</Link>;
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(
  props: Omit<React.ComponentPropsWithoutRef<typeof Image>, 'alt'> & { alt: string }
) {
  return <Image className="rounded-lg" {...props} alt={props.alt} />;
}

function Code({ children, ...props }: { children: string; [key: string]: unknown }) {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

// Component to highlight text in white against the zinc background
function HighlightedText({ children }: { children: React.ReactNode }) {
  return <span className="font-medium text-white">{children}</span>;
}

// Blockquote component for personal anecdotes and quotes
function BlockQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-zinc-300 dark:border-primary pl-4 my-4 italic text-zinc-700 dark:text-zinc-300 text-base lg:text-lg bg-[#292524]/30 py-4 pr-4">
      {children}
    </blockquote>
  );
}

function slugify(str: string | React.ReactNode) {
  return String(str)
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    const slug = slugify(children);
    return createElement(
      `h${level}`,
      { id: slug, className: 'text-white' },
      [
        createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  HighlightedText,
  blockquote: BlockQuote,
};

export function CustomMDX(props: React.ComponentPropsWithoutRef<typeof MDXRemote>) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
    />
  );
}
