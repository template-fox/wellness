module.exports = {
  purge: ['./*.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: '#68c48c',
        secondary: '#ee7f3f'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
