/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
    "./sections/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", defaultTheme.fontFamily.serif],
      },
      colors: {
        "primary-black": "#181818",
        "secondary-black": "#0D111C",
        "primary-grey": "rgba(255, 255, 255, 0.02);",
        "secondary-grey": "#131A2A",
        "primary-text": "#ffffff",
        "secondary-text": "#98A1C0",
      },
    },
  },
  plugins: [],
};
