/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'comfortaa': ['"Comfortaa"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif']
      },
      colors: {
        primary: "#ef2d89",
        secondary: "#6c3d70",
        third: "#ffde14",
        fourth: "#ffcd1c"
      },
    },
  },
  plugins: [],
}