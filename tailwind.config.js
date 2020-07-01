module.exports = {
  // mark if required to enforce !important on all rules
  // important: true,
  purge: [],

  theme: {
    colors: {
      green: '#008855',
      'green-light': '#00BB75',
      'green-dark': '#005535',
      'green-darker': '#003B25',

      yellow: '#FFC86F',
      'yellow-light': '#FFDBA2',
      'yellow-dark': '#FFB53C',
      'yellow-darker': '#FFA109',

      blue: '#0062FF',
      'blue-light': '#3381FF',
      'blue-dark': '#0058E6',
      'blue-darker': '#003B99',

      black: '#000000',
      grey: '#202020',
      'grey-80': '#464646',
      'grey-40': '#B9B9B9',
      'grey-30': '#D2D2D2',
      'grey-20': '#ECECEC',
      'grey-15': '#F9F9F9',
      white: '#FFFFFF',

      success: '#00AA55',
      'success-light': '#00C362',
      'success-dark': '#009048',
      'success-darker': '#00773B',

      warning: '#FFA109',
      'warning-light': '#FFBE55',
      'warning-dark': '#EE9300',
      'warning-darker': '#d58400',

      error: '#CD0A0A',
      'error-light': '#F41616',
      'error-dark': '#B50909',
      'error-darker': '#9C0808'
    },

    screens: {
      // configure media queries to match bootstrap 3
      xs: '480px',
      sm: '768px',
      md: '992px',
      lg: '1200px'
    },

    fontSize: {
      // define values as [fontSize, lineHeight]
      xs: ['0.777rem', '1.5'],
      sm: ['0.888rem', '1.5'],
      base: ['1rem', '1.5'],
      lg: ['1.166rem', '1.5'],

      h1: ['2.5rem', '1.18'],
      h2: ['2.055rem', '1.15'],
      h3: ['1.777rem', '1.333'],
      h4: ['1.555rem', '1.333'],
      h5: ['1.166rem', '1.5'],
      h6: ['1rem', '1.5']
    },

    fontFamily: {
      display: ['"BNPP SANS"', 'sans-serif'],
      body: ['"Public Sans"', 'sans-serif']
    },

    spacing: {
      '0': '0',
      '4': '0.222rem',
      '8': '0.444rem',
      '12': '0.666rem',
      '16': '0.888rem',
      '24': '1.333rem',
      '32': '1.777rem',
      '48': '2.666rem',
      '64': '3.555rem',
      '96': '5.333rem',
      '160': '8.888rem'
    },

    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px'
    }
  },

  fluidTypography: {
    minSize: '18px',
    maxSize: '24.75px',
    minScreen: '480px',
    maxScreen: '1400px'
  },

  variants: {},

  plugins: [require('./src/plugins/fluid-typography')]
}
