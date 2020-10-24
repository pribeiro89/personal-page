const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    fontFamily: {
      sans: ["Lato", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", 'Noto Color Emoji'],
      headings: ["Montserrat", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", 'Noto Color Emoji'],
    },
    extend: {
      colors: {
        primary: colors.teal[500], // 1abc9c
        secondary: colors.blue[900], // 2c3e50
      },
    },
  },
  variants: {},
  plugins: [],
}
