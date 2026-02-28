import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import BlogSection from "@/components/BlogSection";
import { getAllPosts, getAllTags } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  const allTags = getAllTags();

  return (
    <main>
        <Hero />
        <hr className="section-divider max-w-[720px] mx-auto" />
        <About />
        <hr className="section-divider max-w-[720px] mx-auto" />
        <Contact />
        <hr className="section-divider max-w-[720px] mx-auto" />
        <BlogSection posts={posts} allTags={allTags} />
    </main>
  );
}
