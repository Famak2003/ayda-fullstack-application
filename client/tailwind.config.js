/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  darkMode:"class",
  theme: {
    colors: {
      'lightGrey': '#fafafa',
      'black': '#000',
      'white': "#fff",
      'deep_black_red': '#080100'
    },
    extend: {
      boxShadow: {
        custom1: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        custom1: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
      }
    },
    
  },
  plugins: [],
}

