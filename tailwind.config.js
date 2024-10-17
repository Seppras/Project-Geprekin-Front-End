/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bg1: "#F6F6F6",
        bg2: "#303030",
      },
    },
  },
  plugins: [],
};
