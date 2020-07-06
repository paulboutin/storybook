import bootstrapGrid from '../../../src/plugins/bootstrap-grid'

describe('bootstrap grid plugin', () => {
  it('should return a valid css-in-js object', () => {
    // Arrange
    const mock = {
      addUtilities: jest.fn(),
      theme: jest.fn()
    }

    mock.theme.mockReturnValueOnce({
      xs: '480px',
      sm: '768px',
      md: '992px',
      lg: '1200px'
    })

    // Act
    bootstrapGrid.handler(mock)

    // Assert
    expect(mock.theme).toBeCalledTimes(1)

    expect(mock.addUtilities.mock.calls[0][0]).toStrictEqual({
      '.row': { display: 'flex' }
    })

    expect(mock.addUtilities.mock.calls[1][0]).toStrictEqual([
      {
        '.col': { flex: '1' },
        '.col-1': { width: '8.333333%' },
        '.col-10': { width: '83.333333%' },
        '.col-11': { width: '91.666667%' },
        '.col-12': { width: '100.000000%' },
        '.col-2': { width: '16.666667%' },
        '.col-3': { width: '25.000000%' },
        '.col-4': { width: '33.333333%' },
        '.col-5': { width: '41.666667%' },
        '.col-6': { width: '50.000000%' },
        '.col-7': { width: '58.333333%' },
        '.col-8': { width: '66.666667%' },
        '.col-9': { width: '75.000000%' }
      },
      {
        '.col-xs': { '@media (min-width: 480px)': { flex: '1' } },
        '.col-xs-1': { '@media (min-width: 480px)': { width: '8.333333%' } },
        '.col-xs-10': { '@media (min-width: 480px)': { width: '83.333333%' } },
        '.col-xs-11': { '@media (min-width: 480px)': { width: '91.666667%' } },
        '.col-xs-12': { '@media (min-width: 480px)': { width: '100.000000%' } },
        '.col-xs-2': { '@media (min-width: 480px)': { width: '16.666667%' } },
        '.col-xs-3': { '@media (min-width: 480px)': { width: '25.000000%' } },
        '.col-xs-4': { '@media (min-width: 480px)': { width: '33.333333%' } },
        '.col-xs-5': { '@media (min-width: 480px)': { width: '41.666667%' } },
        '.col-xs-6': { '@media (min-width: 480px)': { width: '50.000000%' } },
        '.col-xs-7': { '@media (min-width: 480px)': { width: '58.333333%' } },
        '.col-xs-8': { '@media (min-width: 480px)': { width: '66.666667%' } },
        '.col-xs-9': { '@media (min-width: 480px)': { width: '75.000000%' } }
      },
      {
        '.col-sm': { '@media (min-width: 768px)': { flex: '1' } },
        '.col-sm-1': { '@media (min-width: 768px)': { width: '8.333333%' } },
        '.col-sm-10': { '@media (min-width: 768px)': { width: '83.333333%' } },
        '.col-sm-11': { '@media (min-width: 768px)': { width: '91.666667%' } },
        '.col-sm-12': { '@media (min-width: 768px)': { width: '100.000000%' } },
        '.col-sm-2': { '@media (min-width: 768px)': { width: '16.666667%' } },
        '.col-sm-3': { '@media (min-width: 768px)': { width: '25.000000%' } },
        '.col-sm-4': { '@media (min-width: 768px)': { width: '33.333333%' } },
        '.col-sm-5': { '@media (min-width: 768px)': { width: '41.666667%' } },
        '.col-sm-6': { '@media (min-width: 768px)': { width: '50.000000%' } },
        '.col-sm-7': { '@media (min-width: 768px)': { width: '58.333333%' } },
        '.col-sm-8': { '@media (min-width: 768px)': { width: '66.666667%' } },
        '.col-sm-9': { '@media (min-width: 768px)': { width: '75.000000%' } }
      },
      {
        '.col-md': { '@media (min-width: 992px)': { flex: '1' } },
        '.col-md-1': { '@media (min-width: 992px)': { width: '8.333333%' } },
        '.col-md-10': { '@media (min-width: 992px)': { width: '83.333333%' } },
        '.col-md-11': { '@media (min-width: 992px)': { width: '91.666667%' } },
        '.col-md-12': { '@media (min-width: 992px)': { width: '100.000000%' } },
        '.col-md-2': { '@media (min-width: 992px)': { width: '16.666667%' } },
        '.col-md-3': { '@media (min-width: 992px)': { width: '25.000000%' } },
        '.col-md-4': { '@media (min-width: 992px)': { width: '33.333333%' } },
        '.col-md-5': { '@media (min-width: 992px)': { width: '41.666667%' } },
        '.col-md-6': { '@media (min-width: 992px)': { width: '50.000000%' } },
        '.col-md-7': { '@media (min-width: 992px)': { width: '58.333333%' } },
        '.col-md-8': { '@media (min-width: 992px)': { width: '66.666667%' } },
        '.col-md-9': { '@media (min-width: 992px)': { width: '75.000000%' } }
      },
      {
        '.col-lg': { '@media (min-width: 1200px)': { flex: '1' } },
        '.col-lg-1': { '@media (min-width: 1200px)': { width: '8.333333%' } },
        '.col-lg-10': { '@media (min-width: 1200px)': { width: '83.333333%' } },
        '.col-lg-11': { '@media (min-width: 1200px)': { width: '91.666667%' } },
        '.col-lg-12': {
          '@media (min-width: 1200px)': { width: '100.000000%' }
        },
        '.col-lg-2': { '@media (min-width: 1200px)': { width: '16.666667%' } },
        '.col-lg-3': { '@media (min-width: 1200px)': { width: '25.000000%' } },
        '.col-lg-4': { '@media (min-width: 1200px)': { width: '33.333333%' } },
        '.col-lg-5': { '@media (min-width: 1200px)': { width: '41.666667%' } },
        '.col-lg-6': { '@media (min-width: 1200px)': { width: '50.000000%' } },
        '.col-lg-7': { '@media (min-width: 1200px)': { width: '58.333333%' } },
        '.col-lg-8': { '@media (min-width: 1200px)': { width: '66.666667%' } },
        '.col-lg-9': { '@media (min-width: 1200px)': { width: '75.000000%' } }
      }
    ])

    expect(mock.addUtilities.mock.calls[2][0]).toStrictEqual([
      {
        '.col-offset-1': { marginLeft: '8.333333%' },
        '.col-offset-10': { marginLeft: '83.333333%' },
        '.col-offset-11': { marginLeft: '91.666667%' },
        '.col-offset-12': { marginLeft: '100.000000%' },
        '.col-offset-2': { marginLeft: '16.666667%' },
        '.col-offset-3': { marginLeft: '25.000000%' },
        '.col-offset-4': { marginLeft: '33.333333%' },
        '.col-offset-5': { marginLeft: '41.666667%' },
        '.col-offset-6': { marginLeft: '50.000000%' },
        '.col-offset-7': { marginLeft: '58.333333%' },
        '.col-offset-8': { marginLeft: '66.666667%' },
        '.col-offset-9': { marginLeft: '75.000000%' }
      },
      {
        '.col-xs-offset-1': {
          '@media (min-width: 480px)': { marginLeft: '8.333333%' }
        },
        '.col-xs-offset-10': {
          '@media (min-width: 480px)': { marginLeft: '83.333333%' }
        },
        '.col-xs-offset-11': {
          '@media (min-width: 480px)': { marginLeft: '91.666667%' }
        },
        '.col-xs-offset-12': {
          '@media (min-width: 480px)': { marginLeft: '100.000000%' }
        },
        '.col-xs-offset-2': {
          '@media (min-width: 480px)': { marginLeft: '16.666667%' }
        },
        '.col-xs-offset-3': {
          '@media (min-width: 480px)': { marginLeft: '25.000000%' }
        },
        '.col-xs-offset-4': {
          '@media (min-width: 480px)': { marginLeft: '33.333333%' }
        },
        '.col-xs-offset-5': {
          '@media (min-width: 480px)': { marginLeft: '41.666667%' }
        },
        '.col-xs-offset-6': {
          '@media (min-width: 480px)': { marginLeft: '50.000000%' }
        },
        '.col-xs-offset-7': {
          '@media (min-width: 480px)': { marginLeft: '58.333333%' }
        },
        '.col-xs-offset-8': {
          '@media (min-width: 480px)': { marginLeft: '66.666667%' }
        },
        '.col-xs-offset-9': {
          '@media (min-width: 480px)': { marginLeft: '75.000000%' }
        }
      },
      {
        '.col-sm-offset-1': {
          '@media (min-width: 768px)': { marginLeft: '8.333333%' }
        },
        '.col-sm-offset-10': {
          '@media (min-width: 768px)': { marginLeft: '83.333333%' }
        },
        '.col-sm-offset-11': {
          '@media (min-width: 768px)': { marginLeft: '91.666667%' }
        },
        '.col-sm-offset-12': {
          '@media (min-width: 768px)': { marginLeft: '100.000000%' }
        },
        '.col-sm-offset-2': {
          '@media (min-width: 768px)': { marginLeft: '16.666667%' }
        },
        '.col-sm-offset-3': {
          '@media (min-width: 768px)': { marginLeft: '25.000000%' }
        },
        '.col-sm-offset-4': {
          '@media (min-width: 768px)': { marginLeft: '33.333333%' }
        },
        '.col-sm-offset-5': {
          '@media (min-width: 768px)': { marginLeft: '41.666667%' }
        },
        '.col-sm-offset-6': {
          '@media (min-width: 768px)': { marginLeft: '50.000000%' }
        },
        '.col-sm-offset-7': {
          '@media (min-width: 768px)': { marginLeft: '58.333333%' }
        },
        '.col-sm-offset-8': {
          '@media (min-width: 768px)': { marginLeft: '66.666667%' }
        },
        '.col-sm-offset-9': {
          '@media (min-width: 768px)': { marginLeft: '75.000000%' }
        }
      },
      {
        '.col-md-offset-1': {
          '@media (min-width: 992px)': { marginLeft: '8.333333%' }
        },
        '.col-md-offset-10': {
          '@media (min-width: 992px)': { marginLeft: '83.333333%' }
        },
        '.col-md-offset-11': {
          '@media (min-width: 992px)': { marginLeft: '91.666667%' }
        },
        '.col-md-offset-12': {
          '@media (min-width: 992px)': { marginLeft: '100.000000%' }
        },
        '.col-md-offset-2': {
          '@media (min-width: 992px)': { marginLeft: '16.666667%' }
        },
        '.col-md-offset-3': {
          '@media (min-width: 992px)': { marginLeft: '25.000000%' }
        },
        '.col-md-offset-4': {
          '@media (min-width: 992px)': { marginLeft: '33.333333%' }
        },
        '.col-md-offset-5': {
          '@media (min-width: 992px)': { marginLeft: '41.666667%' }
        },
        '.col-md-offset-6': {
          '@media (min-width: 992px)': { marginLeft: '50.000000%' }
        },
        '.col-md-offset-7': {
          '@media (min-width: 992px)': { marginLeft: '58.333333%' }
        },
        '.col-md-offset-8': {
          '@media (min-width: 992px)': { marginLeft: '66.666667%' }
        },
        '.col-md-offset-9': {
          '@media (min-width: 992px)': { marginLeft: '75.000000%' }
        }
      },
      {
        '.col-lg-offset-1': {
          '@media (min-width: 1200px)': { marginLeft: '8.333333%' }
        },
        '.col-lg-offset-10': {
          '@media (min-width: 1200px)': { marginLeft: '83.333333%' }
        },
        '.col-lg-offset-11': {
          '@media (min-width: 1200px)': { marginLeft: '91.666667%' }
        },
        '.col-lg-offset-12': {
          '@media (min-width: 1200px)': { marginLeft: '100.000000%' }
        },
        '.col-lg-offset-2': {
          '@media (min-width: 1200px)': { marginLeft: '16.666667%' }
        },
        '.col-lg-offset-3': {
          '@media (min-width: 1200px)': { marginLeft: '25.000000%' }
        },
        '.col-lg-offset-4': {
          '@media (min-width: 1200px)': { marginLeft: '33.333333%' }
        },
        '.col-lg-offset-5': {
          '@media (min-width: 1200px)': { marginLeft: '41.666667%' }
        },
        '.col-lg-offset-6': {
          '@media (min-width: 1200px)': { marginLeft: '50.000000%' }
        },
        '.col-lg-offset-7': {
          '@media (min-width: 1200px)': { marginLeft: '58.333333%' }
        },
        '.col-lg-offset-8': {
          '@media (min-width: 1200px)': { marginLeft: '66.666667%' }
        },
        '.col-lg-offset-9': {
          '@media (min-width: 1200px)': { marginLeft: '75.000000%' }
        }
      }
    ])
  })
})
