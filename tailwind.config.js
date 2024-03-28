/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [ 
    function ({ addUtilities}){
      const newUtilities = {
        ".scrollbar-thin" : {
          scrollbarWidth: "thin",
          scrollbarColor: "red black"
        },
        ".scrollbar-webkit" : {
          "&::-webkit-scrollbar":{
            width: "8px"
          },
          "&::-webkit-track": {
            background: "white"
          },
          "&::-webkit-scrollbar-thumb": {
            background: "red",
            borderRadius: "8px",
            border: "solid black"
          }
        }
      }
      addUtilities(newUtilities, [ 'responsive', 'hover'])
    }
  ],
}