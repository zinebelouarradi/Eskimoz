/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,css}"],
  theme: {
    extend: {
      animation: {
        card: "fadeInUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(1rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
