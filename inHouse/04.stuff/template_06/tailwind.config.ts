import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": "JalnanGothic",
      },
      screens: {
        sm: { min: "390px", max: "819px" },
        md: { min: "820px", max: "1079px" },
        lg: { min: "1080px" },
      },
    },
  },
  plugins: [],
};
export default config;
