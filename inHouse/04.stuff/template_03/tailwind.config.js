/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["TheJamsil5Bold"],
    },
  },
  plugins: [require("tailwindcss-animated")],
};
