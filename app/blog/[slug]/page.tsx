import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { getPostBySlug, getAllPosts } from "@/lib/posts";

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
      <div className="prose prose-invert prose-sm max-w-none [&_pre]:bg-surface [&_pre]:border [&_pre]:border-muted [&_pre]:rounded [&_pre]:p-4 [&_pre]:overflow-x-auto [&_a]:text-accent [&_a:hover]:text-text-primary [&_code]:bg-surface [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
