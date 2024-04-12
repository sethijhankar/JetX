/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      primary:'#C02C25',
      primarylight:'#e0251f',
      secondary:'white',
      tertiary:'black',
      gray300:'#F6F6F6',
      gray200:'#FEFEFE',
      yellow:'#F29C45',
    }
  },
  plugins: [],
}