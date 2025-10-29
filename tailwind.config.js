/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        outfit: ['"Outfit"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      colors: {
        lightBg: "#ffffff",
        darkBg: "#0c0c0c",
      },
    },
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
};
