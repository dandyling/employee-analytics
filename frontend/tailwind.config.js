module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#04a599",
        accent: "#a50410",
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ["last"]
    },
  },
  plugins: [],
}
