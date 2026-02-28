import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-fira-mono)", "monospace"],
      },
      colors: {
        background: "#0f0f0f",
        surface: "#1a1a1a",
        muted: "#2d2d2d",
        "text-primary": "#e0e0e0",
        "text-muted": "#8a8a8a",
        accent: "#6b6b6b",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
