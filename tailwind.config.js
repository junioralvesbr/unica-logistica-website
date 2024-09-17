/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const FlipCard = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

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
      }
    },
  },
  plugins: [FlipCard],
}