/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Ramabhadra: " 'Ramabhadra', sans-serif",
      Poppins: "'Poppins', sans-serif",
    },
    colors: {
      primary: "#D81F26",
      "neutral-500": "#787D8B",
      "neutral-600": "#4C515F",
      "neutral-700": "#2C2D35",
      "neutral-100": "#FFFFFF",
    },
    fontSize: {
      "3xl": "3.75rem",
      "2xl": "2rem",
      xl: "1.125rem",
      lg: "0.938rem",
      base: "0.688rem",
    },
    extend: {},
  },
  plugins: [],
};
