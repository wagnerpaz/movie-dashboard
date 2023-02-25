/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{tsx,ts}", "./components/**/*.{tsx,ts}"],
  theme: {
    fontFamily: {
      lato: ["Lato"],
    },
    colors: {
      "dark-1": "#373942",
      "dark-2": "#16181E",
      "gray-1": "#F9F9F9AB",
      "white-1": "#F9F9F9",
      "green-1": "#00B9AE",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
