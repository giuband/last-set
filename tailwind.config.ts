import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/bg.png')",
        footer: "url('/footer.png')",
      },
      keyframes: {
        "hue-rotate": {
          "0%": { filter: "hue-rotate(0deg) contrast(1) brightness(1)" },
          "33%": { filter: "hue-rotate(120deg) contrast(0.7) brightness(1.2)" },
          "50%": { filter: "hue-rotate(180deg) contrast(1) brightness(1)" },
          "66%": { filter: "hue-rotate(240deg) contrast(1.3) brightness(0.9)" },
          "100%": { filter: "hue-rotate(360deg) contrast(1) brightness(1)" },
        },
        transform: {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "33%": { transform: "scale(1.2) rotate(5deg)" },
          "50%": { transform: "scale(1.4) rotate(0deg)" },
          "66%": { transform: "scale(1.2) rotate(-5deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },
        grayscale: {
          "0%": { filter: "grayscale(0)" },
          "33%": { filter: "grayscale(0.05)" },
          "50%": { filter: "grayscale(0.1)" },
          "66%": { filter: "grayscale(0.3)" },
          "100%": { filter: "grayscale(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-video": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "hue-rotate":
          "hue-rotate 10s 2s ease-in-out infinite, transform 30s ease-in-out infinite",
        grayscale: "grayscale 20s 2s ease-in-out infinite",
        "fade-in": "fade-in 1s 2s ease-in-out forwards",
        "fade-in-video": "fade-in-video 3s 3s linear forwards",
      },
    },
  },
  plugins: [],
};
export default config;
