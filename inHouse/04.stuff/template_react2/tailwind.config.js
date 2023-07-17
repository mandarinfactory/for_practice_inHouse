/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "sans" : ["NanumSquare_Neo"],
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
