/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'customCol_sm': '50px 1fr auto',
        'customCol_lg': '200px 1fr auto',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}