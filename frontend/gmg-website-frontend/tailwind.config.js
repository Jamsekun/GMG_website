import { setConstantValue } from "typescript";

// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      textShadow: {
        title: "0 4px 6px rgba(0, 0, 0, 0.25)", // Softer shadow
      },
      animation: {
      fadeIn: "fadeIn 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        "pt-serif": ["PT Serif", "serif"]
      },
      colors: {
        "yellow-950": "#422006",
        "orange-100": "#ffedd5",
        "orange-200": "#fed7aa",
        "primary-dark" : "#6C3F12",
        "secondary-dark" : "#412C16",
      },
    },
  },
  plugins: [],
};