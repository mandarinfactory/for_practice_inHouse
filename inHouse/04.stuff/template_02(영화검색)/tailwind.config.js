/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "sans": ["NanumSquareNeo-Variable"],
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
