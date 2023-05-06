/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary-rgb)",
          dark: "var(--primary-rgb-dark)",
        },
        secondary: {
          DEFAULT: "var(--secondary-rgb)",
          dark: "var(--secondary-rgb-dark)",
        },
        foreground: "var(--foreground-rgb)",
        background: "var(--background-rgb)",
      },
      fontFamily: {
        caveat: ["var(--font-caveat)"],
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
