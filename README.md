# Personal Site

A minimalistic, terminal-themed personal website built with Next.js. Documents learnings and thoughts through blog posts.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Fira Mono font
- Markdown (gray-matter, react-markdown, remark-gfm) for blog content

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How to Add a New Blog Post

1. Create a new Markdown file in `content/blog/` with a kebab-case filename (e.g. `my-new-post.md`).

2. Add frontmatter at the top:

```yaml
---
title: "Your Post Title"
date: 2025-02-28
tags: [java, spring-boot, mysql]
excerpt: "Short description for the blog list."
---
```

3. Write your content below the frontmatter in Markdown. Use `##` and below for section headings—the page title comes from frontmatter `title`, so do not repeat it as `#` in the body.

4. Build or run dev—the post will appear in the Blogs section and at `/blog/my-new-post`.

### Supported Markdown

Blog posts are rendered with `react-markdown` and `remark-gfm`, styled with terminal-themed `prose-invert` classes.

| Feature | Syntax |
| -------- | ------ |
| Section headings | `##`, `###`, `####` (not `#`—reserved for frontmatter title) |
| Horizontal rule | `---` on its own line |
| Blockquote | `> quoted text` |
| Unordered list | `* item` or `- item` |
| Ordered list | `1. item` |
| Nested list | Indent nested items; leave a blank line before the nested list |
| Bold / italic | `**bold**`, `*italic*` |
| Inline code | `` `code` `` |
| Code block | ` ```lang ` fenced block |
| Link | `[text](url)` — external links open in a new tab |
| Image | `![alt](/blog/post-slug/image.png)` |

Example combining a blockquote, rule, and nested list:

```markdown
> Revamped the service and reduced failures by 7%.

---

* Parent item

  * Nested item
```

### Including Images

Place images in `public/blog/[post-slug]/` and reference them in Markdown:

```markdown
![Snowflake diagram](/blog/twitter-snowflake-id/diagram.png)
```

### Frontmatter Fields

| Field    | Required | Description                    |
| -------- | -------- | ------------------------------ |
| `title`  | Yes      | Post title                     |
| `date`   | Yes      | Publish date (YYYY-MM-DD)      |
| `tags`   | Yes      | Array of tags for filtering    |
| `excerpt`| No       | Short summary for list view    |

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout + Header
│   ├── page.tsx       # Home (Hero, About, Contact, Blogs)
│   ├── globals.css
│   └── blog/[slug]/   # Individual post pages
├── components/
│   └── MarkdownContent.tsx  # Shared blog Markdown renderer
├── content/blog/      # Markdown blog posts
└── lib/posts.ts       # Blog content loader
```

## Build

```bash
npm run build
npm start
```
