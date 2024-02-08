/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: { 
      colors: {
      primary: "#1F2A37",
      secondary: "#00f6ff",
      dimWhite: "rgba(255, 255, 255, 0.7)",
      dimBlue: "rgba(9, 151, 124, 0.1)",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      inter:["Inter", "sans-serif"]
    },},
  },
  plugins: [],
}

