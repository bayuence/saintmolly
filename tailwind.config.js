/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pureBlack: "#000000",
        brandGray: "#A3A3A3",
        brandMuted: "#737373",
      },
      fontFamily: {
        syne: ["'Syne'", "sans-serif"],
        cinzel: ["'Cinzel'", "serif"],
        oswald: ["'Oswald'", "sans-serif"],
        space: ["'Space Grotesk'", "sans-serif"],
      },
      letterSpacing: {
        'pre-title': '0.45em',
        'sub-status': '0.55em',
      },
    },
  },
  plugins: [],
};
