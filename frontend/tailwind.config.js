module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#04a599",
        accent: "#a50410",
        success: "#adff2e",
        warning: "#ffa500",
        normal: "#ffff00"
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ["last"]
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
