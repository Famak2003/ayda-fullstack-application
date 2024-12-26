const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,tsx,jsx}",
    flowbite.content(), // Ensure Flowbite React paths are included
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "xl": "1150px",
        "tab": "950px",
        "mobile": "450px"
      },
      colors: {
        light_grey: "#595959",
        primary_light_grey: "#FaFaFa",
        black: "#c7c7c7",
        primary_black: "#000",
        white: "#fff",
        deep_black_red: "#080100",
        secondary_pink: "#f46197",
        primary_pink: "#EA589A",
        light_pink: "#F08FB2",
        hot_pink: "#ff0000",
        blue: "#007bff",
        indigo: "#6610f2",
        purple: "#6f42c1",
        red: "#dc3545",
        orange: "#fd7e14",
        yellow: "#ffc107",
        green: "#28a745",
        teal: "#20c997",
        cyan: "#17a2b8",
        gray: "#6c757d",
        gray_dark: "#343a40",
        primary: "#d63447",
        secondary: "#f57b51",
        success: "#28a745",
        info: "#17a2b8",
        warning: "#ffc107",
        danger: "#dc3545",
        light: "#f8f9fa",
        dark: "#343a40",
      },
      boxShadow: {
        custom_pink1: "rgb(240, 143, 178, 0.25) 0px 14px 28px, rgb(240, 143, 178, 0.22) 0px 10px 10px",
        custom1: "rgb(0,0, 0, 0.25) 0px 14px 28px, rgb(0,0, 0, 0.22) 0px 10px 10px",
        custom2: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        custom3: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
        custom4: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
        custom5: "rgba(17, 17, 26, 0.1) 0px 1px 0px",
        custom6: "blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px",
      },
    },
  },
  plugins: [
    flowbite.plugin(), // Correctly imported as a require statement
  ],
};
