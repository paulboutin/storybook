module.exports = {
  // mark if required to enforce !important on all rules
  // important: true,
  purge: [],

  theme: {
    colors: {
      green: '#00925b',
      'green-light': '#00ab6b',
      'green-dark': '#00784b',
      'green-darker': '#00452b',

      yellow: '#ffc86f',
      'yellow-light': '#ffdba2',
      'yellow-dark': '#ffb53c',
      'yellow-darker': '#ffa109',

      blue: '#2462c6',
      'blue-light': '#417cdc',
      'blue-dark': '#2057b0',
      'blue-darker': '#184285',

      black: '#000000',
      grey: '#202020',
      'grey-85': '#464646',
      'grey-70': '#6c6c6c',
      'grey-55': '#939393',
      'grey-40': '#b9b9b9',
      'grey-25': '#dfdfdf',
      'grey-15': '#f9f9f9',
      white: '#ffffff',

      success: '#00aa55',
      'success-light': '#00c362',
      'success-dark': '#009048',
      'success-darker': '#00773b',

      error: '#f64747',
      'error-light': '#f75f5f',
      'error-dark': '#f41616',
      'error-darker': '#cd0a0a'
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
      display: '"BNPP SANS"',
      body: '"BNPP Sans"'
    },

    spacing: {
      '0': '0',
      '3xs': '0.125rem',
      '2xs': '0.25rem',
      xs: '0.5rem',
      sm: '0.75rem',
      base: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
      '3xl': '4rem',
      '4xl': '6rem',
      '5xl': '10rem'
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
