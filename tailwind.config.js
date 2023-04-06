/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./validate.js"
  ],
  theme: {
    colors: {
      red: "hsl(0, 100%, 74%)",
      "desaturated-red": "hsl(355, 60%, 65%)",
      green: "hsl(154, 59%, 51%)",
      blue: "hsl(248, 32%, 49%)",
      "dark-blue": "hsl(249, 10%, 26%)",
      "grayish-blue": "hsl(246, 25%, 77%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      poppins: ["'Poppins'", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
