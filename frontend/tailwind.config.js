/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      zcool: ["ZCOOL KuaiLe", "sans-serif"],
      zlogo: ["ZCOOL KuaiLe", "sans-serif"],
      Shojumaru: ["Shojumaru", "sans-serif"],
    },
    extend: {
      colors: {
        "gradient-heading":
          "linear-gradient(93.73deg, #ED0137 20.19%, #F05733 88.3%)",
        heading: "#ED0137",
        BorderColor: "#C4110C",
        CardBackground: "#0D0D0D",
        CustomBackground: "#3B3B3B",
        FooterBackground: "#1c1919",
      },
      backgroundImage: (theme) => ({
        "gradient-button":
          "linear-gradient(93.73deg, #D51B46 10.19%, #EE6910 98.19%)",
          
      }),
    },
  },
  plugins: [],
};
//background: ;
