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
      xs: { max: '767px' },
      sm: { min: '768px' },
      md: { min: '992px' },
      lg: { min: '1200px' },
      xl: { max: '1201px' }
    },

    fontSize: {
      // define values as [fontSize, lineHeight]
      sm: ['0.75rem', '1rem'],
      base: ['1rem', '1.5rem'], // h6/p
      lg: ['1.125rem', '1.625rem'], // h5
      xl: ['1.25rem', '1.75rem'], // h4
      '2xl': ['1.5rem', '2rem'], // h3
      '3xl': ['1.875rem', '2.375rem'], // h2
      '4xl': ['2.25rem', '2.75rem'] // h1
    },

    spacing: {
      '0': '0',
      '2': '0.125rem',
      '4': '0.25rem',
      '8': '0.5rem',
      '12': '0.75rem',
      '16': '1rem',
      '24': '1.5rem',
      '32': '2rem',
      '48': '3rem',
      '64': '4rem',
      '96': '6rem',
      '160': '10rem',
      '320': '20rem'
    }
  },

  fluidTypography: {
    minSize: '16px',
    maxSize: '20px',
    minScreen: '320px',
    maxScreen: '1200px'
  },

  variants: {},

  plugins: [require('./src/tailwind/fluid-typography-plugin')]
}
