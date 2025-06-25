/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true, // Centers the container horizontally
      padding: "1.5rem", // Sets padding inside the container
      screens: {
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1200px", // Extra-large screens
        "2xl": "1430px", // Extra-extra-large screens
      },
    },
    extend: {
      backgroundPosition: {
        'top-minus-250': 'center top -250px',},
        
      colors: {
        primary: "#333e48",
        secondary: "#29323a",
        bordersss: "#fed700",
        menuNav: "#f5f5f5"
       
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none'  /* Chrome, Safari, and Opera */
          },
        },
      }
      addUtilities(newUtilities, ['responsive'])
    }
    
  ],
};
