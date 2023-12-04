/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "390px", max: "819px" },
      md: { min: "820px", max: "1023px" },
      lg: { min: "1023px" },
    },
    extend: {},
    fontFamily: {
      sans: ["JalnanGothic"],
    },
  },
  plugins: [],
  darkMode: "class",
};
