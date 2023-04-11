/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [],
  // content: ['*'],
  content: ['./public/*.html'],
  // content: ['./public/*.{html,js,jsx}'],
  // content: ['./public/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors:{
        myred: "red",
      }
    },
  },
  plugins: [],
}

