/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Inter : ["Inter","sans-serif"],
        Poppins : ["Poppins","sans-serif"],
        Pacifico : ["Pacifico","cursive"],
        Roboto : ["Roboto",""]
      }
    },
    extend : {
    screens : {
        'min-360': { 'min': '359px' },
        'max-450' : { 'max': '449px' },
    },
  },
  },
  plugins: [],
}

