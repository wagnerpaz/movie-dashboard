/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{tsx,ts}",
    "./components/**/*.{tsx,ts}",
    "./layouts/**/*.{tsx,ts}",
  ],
  theme: {
    fontFamily: {
      lato: ["Lato"],
    },
    colors: {
      "dark-1": "#373942",
      "dark-2": "#16181E",
      "gray-1": "#F9F9F9AB",
      "white-1": "#F9F9F9",
      "semi-white-1": "#F9F9F933",
      "green-1": "#00B9AE",
    },
    extend: {
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@headlessui/tailwindcss"),
  ],
};
