/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'servy-blue': '#078BFB',
        'servy-dark': '#1B1B1B',
        'servy-green': '#63CB75',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}