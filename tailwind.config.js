/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anonymousPro: ["Averia Serif Libre", "serif"],
      },
      keyframes: {
        customBorderColor: {
          "0%": { borderColor: "white", width: "0%" },
          "45%": { borderColor: "transparent", width: "50%" },
          "80%": { borderColor: "white", width: "100%" },
          "100%": { borderColor: "white", width: "100%" },
        },
        typing: {
          from: { width: 0 },
        },
      },
      animation: {
        customBorderColor:
          "customBorderColor 3s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
