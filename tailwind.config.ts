import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#080E3A",
          900: "#0B123F",
          800: "#11184C",
          700: "#1A2260",
          600: "#232C74",
          500: "#3A4278",
          400: "#5F6699",
          300: "#9298C0",
          200: "#C2C6E2",
          100: "#DCE0F2",
          50: "#EEF1FF",
        },
        signal: {
          600: "#0A1A6E",
          500: "#1030CC",
          400: "#3d5be0",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        serif: [
          "var(--font-source-serif)",
          "Georgia",
          "serif",
        ],
      },
      maxWidth: {
        content: "1160px",
      },
    },
  },
  plugins: [],
};

export default config;
