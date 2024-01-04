/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./config/*.json",
    "./assets/*.liquid",
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/*.json",
    "./templates/customers/*.liquid",
  ],
  theme: {
    extend: {
      height: {
        '94': '22rem'
      }
    },
  },
  plugins: [],
};

