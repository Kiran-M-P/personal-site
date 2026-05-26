import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const firaMono = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-fira-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kiran | Software Engineer",
  description: "Notes, learnings, and reflections from my journey as a software engineer.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
  },
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
        <Analytics />
      </body>
    </html>
  );
}
