/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        boneWhite: "#f6f4ee",
      },
      fontFamily: {
        bodoni: ["'BodoniAntComDDemBol'", "serif"],
        daniel: ["'Daniel'", "cursive"],
      },
    },
  },
  plugins: [],
};
