/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anonymousPro: ["Anonymous Pro", "monospace"],
      },
      keyframes: {
        customBorderColor: {
          "0%": { borderColor: "white", width: "0%" },
          "50%": { borderColor: "transparent", width: "50%" },
          "100%": { borderColor: "white", width: "100%" },
        },
        typing: {
          from: { width: 0 },
        },
      },
      animation: {
        customBorderColor:
          "customBorderColor 2s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
