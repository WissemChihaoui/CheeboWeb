const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      
    },
    colors: {
      "dark-bg":"#18191A",
      "dark-block": "#242526",

      "primary": "8C52FF",
      
      "dark-primary": "#526D82",
      "dark-secondary": "#910A67"
     
    },
  },
  plugins: [],
});