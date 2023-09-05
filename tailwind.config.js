/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: ['./src/**/*.{html,js,jsx}'], // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'color-prueba': '#F89283',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});
