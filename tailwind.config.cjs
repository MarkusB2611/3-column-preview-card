/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        title: ["2.5rem", "3rem"],
      },
      fontFamily: {
        bigShouldersDisplay: ["Big Shoulders Display", "sans-serif"],
        LexendDeca: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
