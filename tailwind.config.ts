import type { Config } from "tailwindcss";

// Gori Valley brand tokens — Himalayan palette, no gradients, no neon.
// See README.md "Design system" section for the reasoning behind these choices.
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F4EE",
        forest: {
          DEFAULT: "#26372A",
          light: "#3F5641",
          dark: "#16211A",
        },
        stone: {
          DEFAULT: "#A79C8A",
          light: "#D8D0C0",
          dark: "#6E6353",
        },
        slate: {
          DEFAULT: "#4B565B",
          light: "#6B777C",
          dark: "#333B3F",
        },
        brown: {
          DEFAULT: "#6B4A34",
          light: "#8C6748",
          dark: "#4A3122",
        },
        // The single accent, reserved for the one conversion action on the
        // site: joining the waitlist. Everything else stays neutral.
        gold: {
          DEFAULT: "#B08D57",
          light: "#C9AB7C",
          dark: "#8F7040",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-work-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        "7xl": "80rem",
      },
      letterSpacing: {
        widest: ".25em",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
