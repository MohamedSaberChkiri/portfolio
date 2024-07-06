/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anonymousPro: ["Averia Serif Libre", "serif"],
        anton: ["Anton", "sans-serif"],
        myName: ["Hachi Maru Pop", "cursive"],
      },
      transitionProperty: {
        transform: "transform",
      },
      transitionDuration: {
        300: "300ms",
      },
      transitionTimingFunction: {
        "in-out": "ease-in-out",
      },
    },
  },
  plugins: [],
};
