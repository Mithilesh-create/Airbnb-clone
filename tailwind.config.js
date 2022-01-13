module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'className'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "behind-bg":
          "url('https://bit.ly/32gYJyA')",

          "imageOne":"url('https://bit.ly/3p4LR7s')",

          "imageTwo":"url('https://bit.ly/3p14clW')",

          "imageThree":"url('https://bit.ly/3E6rL0K')",

          "imageFour":"url('https://bit.ly/3p2qtja')",

          "experience":"url('https://bit.ly/3F8qrvG')",

          "experienceHome":"url('https://bit.ly/3DYmmJi')",

          "host":"url('https://bit.ly/3IV09zr')",
      }),
      height: {
        "120vh": "120vh",
      },
      fontFamily: {
        fontpopins:['Poppins']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
