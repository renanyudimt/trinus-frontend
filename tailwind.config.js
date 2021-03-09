const colors = require("./constanst/colors");
const height = require("./constanst/height");
const width = require("./constanst/width");

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      colors,
      height,
      width
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }