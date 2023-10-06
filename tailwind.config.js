/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brand-blue": "#170E7D",
        "dark-blue": "#15104E",
        "brand-gray": "#31394E",
        "brand-white": "#FBFBFB",
        "gray-202": "#C7C7C7",
        "brand-red": "#FF3131",
        "light-gray": "#9F9F9F",
        "lighter-gray": "#F7F9FB",
        "brand-cyan": "#A8A3DF",
        warning: "#EF2637",
        primary: "#382DBC",
        "blue-450": "#5136F5",
        "gray-750": "#767676",
        "brand-green": "#1A9E27",
        "gray-250": "#DEDEDE",
        "brand-yellow": "#FFC700",
        "black-900": "#19291A",
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
