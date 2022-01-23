module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        squid: ['"Game of Squids"', "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        twitterblue: "#00ACEE",
        twitterblue_light: "#00acee1a",
      },
    },
  },
  plugins: [],
};
