import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

interface BlogCardProps extends PostMeta {
  slug: string;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function BlogCard({ slug, title, date, tags, excerpt }: BlogCardProps) {
  return (
    <article className="border border-muted/60 rounded p-6 hover:border-accent/50 transition-colors">
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-text-muted border border-muted/60 rounded px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-medium text-text-primary mb-2">
        <Link href={`/blog/${slug}`} className="hover:text-accent transition-colors">
          {title}
        </Link>
      </h3>
      <p className="text-text-muted text-sm mb-3">{formatDate(date)}</p>
      {excerpt && (
        <p className="text-text-muted text-sm mb-4 line-clamp-2">{excerpt}</p>
      )}
      <Link
        href={`/blog/${slug}`}
        className="text-sm text-accent hover:text-text-primary transition-colors"
      >
        Read more →
      </Link>
    </article>
  );
}
