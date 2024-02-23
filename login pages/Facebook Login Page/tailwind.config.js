/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    // writting inside theme will over write the given values
    extend: {
      // but keeping them inside the extend will help just extend the value not oveerwrite
      spacing:{
        13:'3.25rem'
      } 
    },
  },
  plugins: [],
}

