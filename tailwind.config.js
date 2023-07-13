/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sansmont: ["Montserrat", "sans-serif"],
      fontlobaser: ["Lobster",  "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}