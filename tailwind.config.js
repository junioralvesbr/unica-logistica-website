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
        primary: '#ef2d89',
        secondary: '#6c3d70',
        third: '#ffde14',
        fourth: '#ffcd1c',
        fifth: 'rgba(239,45,137,0.03)',
        sixth: 'rgba(18,17,16,0.6)',
        seventh: '#a3807e',
      },
      backgroundImage: {
        'background-gradient': "linear-gradient(135deg, #ef2d89 20%, #ffde14 100%)",
        'background-1': "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('./images/bg-services.webp')",
        'background-2': "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('./images/box.webp')",
        'background-3': "url('./images/bg-depoimento.webp')",
        'background-4': "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('./images/ecosistema.jpg')",
        'background-5': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('./images/esg-background.webp')",
      },
      backgroundSize: {
        '120%': '120%',
        '150%': '150%',
        '175%': '175%',
        '200%': '200%',
      }
    },
  },
  plugins: [FlipCard],
}