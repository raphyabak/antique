/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: { boxShadow: {
      'play': '0px 0px 40px -12px rgba(0, 0, 0, 0.2)',
      'option': '0px 30px 60px -10px rgba(0, 0, 0, 0.14)',
      'search':'0px 40px 100px rgba(110, 110, 110, 0.08)',
      'navy': '0px 25px 25px -20px rgba(0, 0, 0, 0.2)',
      'butoon': '0px 16px 20px -6px rgba(233, 106, 27, 0.19)',
      'recently': '0px 40px 90px rgba(0, 0, 0, 0.06)',
      'insidebutton': '1px solid rgba(255, 255, 255, 0.32)',
      
    },},
  },
  plugins: [],
}
