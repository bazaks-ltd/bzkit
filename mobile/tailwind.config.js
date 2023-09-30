/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{css,xml,html,vue,svelte,ts,tsx}"],
  // use the .ns-dark class to control dark mode (applied by NativeScript) - since 'media' (default) is not supported.
  darkMode: ["class", ".ns-dark"],
  theme: {
    extend: {
      colors: {
        primary: "#ff2323",
        bzred: {
          50: "#fff0f0",
          100: "#ffdddd",
          200: "#ffc0c0",
          300: "#ff9494",
          400: "#ff5757",
          500: "#ff2323",
          600: "#ff0000",
          700: "#d70000",
          800: "#b10303",
          900: "#920a0a",
          950: "#500000",
        },
        shark: {
          50: "#f7f7f8",
          100: "#eeeef0",
          200: "#dadadd",
          300: "#babbbf",
          400: "#94959c",
          500: "#767681",
          600: "#606169",
          700: "#4e4e56",
          800: "#434349",
          900: "#3b3c3f",
          950: "#27272a",
          DEFAULT: "#27272a",
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // disables browser-specific resets
  },
};
