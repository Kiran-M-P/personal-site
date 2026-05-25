"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
import type { Post } from "@/lib/posts";

interface BlogSectionProps {
  posts: Post[];
  allTags: string[];
}

export default function BlogSection({ posts, allTags }: BlogSectionProps) {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  };

  const filteredPosts =
    selectedTags.size === 0
      ? posts
      : posts.filter((p) =>
          [...selectedTags].some((tag) => p.tags.includes(tag))
        );

  return (
    <section id="blogs" className="py-16 scroll-mt-20">
      <div className="max-w-[720px] mx-auto px-6">
        <h2 className="text-lg font-medium text-text-muted mb-2">
          // knowledge base
        </h2>
        <p className="text-text-muted text-sm mb-6">
        A collection of technical explorations, engineering blog summaries, and my learnings from the field. Filter by tags to find relevant topics.
        </p>

        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setSelectedTags(new Set())}
              className={`px-3 py-1.5 text-sm rounded border transition-colors ${
                selectedTags.size === 0
                  ? "border-accent bg-muted/30 text-text-primary"
                  : "border-muted text-text-muted hover:text-text-primary hover:border-accent/50"
              }`}
            >
              all
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 text-sm rounded border transition-colors ${
                  selectedTags.has(tag)
                    ? "border-accent bg-muted/30 text-text-primary"
                    : "border-muted text-text-muted hover:text-text-primary hover:border-accent/50"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <div className="space-y-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))
          ) : (
            <p className="text-text-muted text-sm">No posts yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}
