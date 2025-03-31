/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FBA1B7", //dark pink
        secondary: "#FFD1DA", // light pink
        tertiary: "#FFDBAA", // yellow
        "baby-pink": "#FFF0F5",
        "baby-blue": "#a1b7fb",
        "baby-purple": "#b8a1fb",
        "light-yellow":"#ffedd5",
        "navy-blue":"#051f6f",
        "dark-grey": "#7c7c7c",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpeg')",
      },
      dropShadow:{
        "header": '0 0px 8px #FFD1DA'
      },
      fontFamily:{
        'serif':['"Playfair Display"'],
        'display':['"Vibur"'],
      }
    },
  },
  plugins: [],
};