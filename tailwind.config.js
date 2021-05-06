module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      'screen-2/4': '50vh',
      'screen-3/4': '75vh',
      'screen': '100vh'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
