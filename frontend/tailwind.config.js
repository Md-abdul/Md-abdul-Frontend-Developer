/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-brown": "#554800",
        "custom-button-yellow": "#F9D326",
        "custome-backgroud-1": "#0E0E0E",
        "white-text": "#F0F6FB",
        "product-background": "#211D0D",
        "slider-background":"FECC00",
      },
      // backgroundImage: theme => ({
      //   'gradient-custom': `linear-gradient(to right, ${theme('colors.custom-background-1')}, ${theme('colors.product-background')})`,
      // }),
      backgroundImage: theme => ({
        'gradient-custom': 'linear-gradient(180deg, #FECC00 0%, #FECC00 67.23%, #0E0E0E 67.33%, rgba(14, 14, 14, 0) 100%)',
      }),
    },
  },
  plugins: [],
};
