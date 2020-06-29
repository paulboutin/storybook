import fluidTypography from '../../../src/plugins/fluid-typography'

describe('fluid typography plugin', () => {
  it('should return a valid css-in-js object', () => {
    // Arrange
    const mock = {
      addBase: jest.fn(),
      config: jest.fn()
    }

    mock.config.mockReturnValueOnce({
      minSize: '16px',
      maxSize: '20px',
      minScreen: '480px',
      maxScreen: '1200px'
    })

    mock.config.mockReturnValueOnce({
      xs: '480px',
      sm: '768px',
      md: '992px',
      lg: '1200px'
    })

    // Act
    fluidTypography.handler(mock)

    // Assert
    expect(mock.config).toBeCalledTimes(2)

    expect(mock.addBase).toBeCalledWith({
      html: {
        fontSize: '16px',
        '@media screen and (min-width: 480px)': {
          fontSize: 'calc(16px + 4 * ((100vw - 480px) / 720))'
        },
        '@media screen and (min-width: 768px)': {
          fontSize: 'calc(16px + 4 * ((100vw - 480px) / 720))'
        },
        '@media screen and (min-width: 992px)': {
          fontSize: 'calc(16px + 4 * ((100vw - 480px) / 720))'
        },
        '@media screen and (min-width: 1200px)': { fontSize: '20px' }
      }
    })
  })
})
