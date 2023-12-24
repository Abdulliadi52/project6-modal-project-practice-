/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundColor: {
        bg1: "rgba(0, 0, 255, 0.5)",
      },
      backgroundImage: {
        image1: "url('/image/hero.jpeg')",
      },
    },
  },
  plugins: [],
};
