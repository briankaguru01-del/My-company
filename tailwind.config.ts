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
          950: "#0a0e12",
          900: "#0f1519",
          800: "#161d23",
          700: "#212b32",
          600: "#374149",
          500: "#5a656d",
          400: "#838d94",
          300: "#aab2b8",
          200: "#ced3d7",
          100: "#e7eaec",
          50: "#f5f6f7",
        },
        signal: {
          600: "#1f5f4f",
          500: "#287963",
          400: "#3a9280",
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
