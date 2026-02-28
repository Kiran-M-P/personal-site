"use client";

const navLinks = [
  { href: "#about", label: "about" },
  { href: "#contact", label: "contact" },
  { href: "#blogs", label: "blogs" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-muted/60">
      <nav className="max-w-[720px] mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-text-primary font-medium hover:text-accent transition-colors">
          ~
        </a>
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-text-muted hover:text-text-primary text-sm transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
