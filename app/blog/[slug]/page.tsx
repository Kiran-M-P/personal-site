import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import SnowflakeDiagram from "@/components/SnowflakeDiagram";
import MarkdownContent from "@/components/MarkdownContent";

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return { title: `${post.title} | Kiran` };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const DIAGRAM_MARKER = "<!-- DIAGRAM -->";
  const hasDiagram = slug === "twitter-snowflake-id" && post.content.includes(DIAGRAM_MARKER);
  const [contentBeforeDiagram, contentAfterDiagram] = hasDiagram
    ? post.content.split(DIAGRAM_MARKER)
    : [post.content, ""];

  return (
    <article className="max-w-[720px] mx-auto px-6 py-16">
      <Link
        href="/#blogs"
        className="text-text-muted text-sm hover:text-accent mb-8 inline-block transition-colors"
      >
        ← back to blogs
      </Link>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-text-muted border border-muted/60 rounded px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
      <h1 className="text-2xl md:text-3xl font-semibold text-text-primary mb-2">
        {post.title}
      </h1>
      <p className="text-text-muted text-sm mb-8">{formatDate(post.date)}</p>
      {hasDiagram ? (
        <>
          <MarkdownContent>{contentBeforeDiagram}</MarkdownContent>
          <div className="my-12">
            <SnowflakeDiagram />
          </div>
          {contentAfterDiagram ? (
            <MarkdownContent>{contentAfterDiagram}</MarkdownContent>
          ) : null}
        </>
      ) : (
        <MarkdownContent>{post.content}</MarkdownContent>
      )}
    </article>
  );
}
