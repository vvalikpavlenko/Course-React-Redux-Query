/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: 'rgb(186, 36, 39)',
        black: 'rgb(43, 43, 43)',
        yellow: 'yellow'
      }
    },
  },
  plugins: [],
}

