import { nextui } from "@nextui-org/theme";
import { color } from "framer-motion";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      primary: {
        50: "#e8f4ff",
        100: "#d4eaff",
        200: "#b2d4ff",
        300: "#84b6ff",
        400: "#5489ff",
        500: "#2d5cff",
        600: "#092aff",
        700: "#001fff",
        800: "#0420cf",
        900: "#0f28a9",
        950: "#09155d",
      },
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
