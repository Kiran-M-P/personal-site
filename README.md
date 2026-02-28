# Personal Site

A minimalistic, terminal-themed personal website built with Next.js. Documents learnings and thoughts through blog posts.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Fira Mono font
- Markdown (gray-matter) for blog content

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

3. Write your content below the frontmatter in Markdown.

4. Build or run dev—the post will appear in the Blogs section and at `/blog/my-new-post`.

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
├── content/blog/      # Markdown blog posts
└── lib/posts.ts       # Blog content loader
```

## Build

```bash
npm run build
npm start
```
