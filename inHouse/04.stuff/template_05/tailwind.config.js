/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['SBAggroB'],
    },
    screens: {
      sm: { min: "390px", max: "819px" },
      md: { min: "820px", max: "1079px" },
      lg: { min: "1080px" },
    },
  },
  plugins: [],
  darkMode: "class",
}