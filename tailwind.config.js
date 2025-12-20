/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode : "class",
  theme: {
    extend: {
      colors:{
        textsecondary : "#62748E",
        "textsecondary-dark": "#CAD5E2",
        cardtext: "#45556C",
      }
    },
  },
  plugins: [],
}

