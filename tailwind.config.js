const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: colors.gray[50],
        theme: colors.green[900],
        focused: colors.gray[800],
        light: colors.gray[500],
        lighter: colors.gray[200],
        lightest: colors.gray[100],
        secondary: colors.orange
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
