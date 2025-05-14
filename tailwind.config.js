/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: '#e6e6e4',
      },
      fontFamily:{
        title:["Fira Code", "monospace"]
      },
    },
  },
  plugins: [],
}

