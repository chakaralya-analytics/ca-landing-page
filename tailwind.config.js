/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      width:{
        "card-width" : "calc(100% / 3 - 40px)"
      },
    },
  },
  plugins: [],
}

