/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");
const { colors, shark } = require("./colors.cjs");

module.exports = {
  content: ["./src/**/*.{css,xml,html,vue,svelte,ts,tsx}"],
  // use the .ns-dark class to control dark mode (applied by NativeScript) - since 'media' (default) is not supported.
  darkMode: ["class", ".ns-dark"],
  theme: {
    extend: {
      colors: {
        ...colors,
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
        shark,
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // disables browser-specific resets
  },
};
