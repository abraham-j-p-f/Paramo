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
        paramo: {
          black: "#131313",
          yellow: "#FFE037",
          blue: "#37DBFF",
        },
      },
      fontFamily: {
        vietnam: ["var(--font-be-vietnam-pro)"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
