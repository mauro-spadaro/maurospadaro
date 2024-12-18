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
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          400: "#ebebeb", // Footer colour
          500: "#8792a4", // Nice to meet you
          800: "#333333", // Darker grey
        },
        red: {
          200: "#bfa5a3", // Rosy colour
          500: "#8E7171", // Hover colour
          800: "#7A3030", // Red for Navbar
        },
      },
    },
  },
  plugins: [],
};

