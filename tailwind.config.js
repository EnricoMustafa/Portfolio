/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: '#c0d8d8',
        color2: '#f2e9e6',
        color3: '#3a3232',
      },
    },
  },
  plugins: [],
}

