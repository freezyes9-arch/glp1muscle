import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101828",
        mist: "#f5f7fb",
        mint: "#59c3a6",
        ocean: "#226f9f",
        plum: "#7d5fff"
      },
      boxShadow: {
        soft: "0 18px 70px rgba(16, 24, 40, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
