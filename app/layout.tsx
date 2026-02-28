import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const firaMono = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-fira-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kiran | Software Engineer",
  description: "Personal site documenting learnings and thoughts through blog posts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={firaMono.variable}>
      <body className="font-mono antialiased min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
