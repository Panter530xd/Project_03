/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        badscript: ["var(--font-badscript)"],
      },
      colors: {
        OrangePrimary: "#FE724D",
        OrangeSecondary: "#F1592A",
        GreyPrimary: "#EDEDED",
        FooterMainColor: "#262D2F",
        BackgroundColor: "#FFF8F0",
        hederColor: "#7C7C7C",
        active: "#FE724D",
      },
    },
  },
  plugins: [],
};
