import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="max-w-[720px] mx-auto px-6 py-16 text-center">
      <h1 className="text-xl font-medium text-text-primary mb-4">Post not found</h1>
      <Link href="/#blogs" className="text-accent hover:text-text-primary transition-colors">
        ← back to blogs
      </Link>
    </div>
  );
}
