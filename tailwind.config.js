/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{},
      boxShadow:{},
      color:{
        primary:"#D25C12",
        // font-colors
        "h1-color":"#263238",
        "p-color":"#868686"
      }
    },
  },
  plugins: [],
}

