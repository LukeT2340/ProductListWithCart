module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        lightCream: "#fcf8f5",
        customRed: "#c8480c"
      },
      fontFamily: {
        custom: ["RedHat"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
