import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
}

export interface Post extends PostMeta {
  slug: string;
  content: string;
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, "");
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      const slug = getSlugFromFilename(filename);
      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        excerpt: data.excerpt || "",
        content,
      };
    });
  return posts.sort((a, b) => (b.date > a.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    excerpt: data.excerpt || "",
    content,
  };
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}
