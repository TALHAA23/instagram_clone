/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'customCol': 'auto 1fr auto'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}