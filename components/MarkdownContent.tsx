import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

export const proseClass =
  "prose prose-invert prose-sm max-w-none [&_pre]:my-8 [&_pre]:bg-surface [&_pre]:border [&_pre]:border-muted [&_pre]:rounded [&_pre]:p-4 [&_pre]:overflow-x-auto [&_a]:text-accent [&_a:hover]:text-text-primary [&_code]:bg-surface [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_blockquote]:border-l-accent [&_blockquote]:bg-surface/50 [&_blockquote]:py-1 [&_blockquote]:not-italic [&_hr]:border-muted [&_hr]:my-10 [&_ul]:list-disc [&_ol]:list-decimal [&_li]:my-1 [&_h2]:mt-10 [&_h3]:mt-8 [&_h4]:mt-6";

const markdownComponents: Components = {
  a: ({ href, children, ...props }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  ),
  h1: ({ children, ...props }) => (
    <h2 className="text-xl font-semibold text-text-primary mt-10 mb-3" {...props}>
      {children}
    </h2>
  ),
};

interface MarkdownContentProps {
  children: string;
}

export default function MarkdownContent({ children }: MarkdownContentProps) {
  return (
    <div className={proseClass}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
