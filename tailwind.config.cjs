/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "roboto":  ['Roboto'],
      "slab": ["Antic Slab"],
      

    },
    colors: {
      "box-1": "#6C999A",
      "box-2": "#EBCBBB",
      "bg-color": "#FFFFFF"
    },
    extend: {},
  },
  plugins: [],
}
