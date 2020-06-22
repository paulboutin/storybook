import fluidTypography from '../../src/tailwind/fluid-typography-plugin'

describe('fluid typography plugin', () => {
  it('should return a valid css-in-js object', () => {
    // Arrange
    const mock = {
      addBase: jest.fn(),
      config: jest.fn()
    }

    mock.config.mockReturnValueOnce('16px')
    mock.config.mockReturnValueOnce('20px')
    mock.config.mockReturnValueOnce('480px')
    mock.config.mockReturnValueOnce('1200px')

    // Act
    fluidTypography.handler(mock)

    // Assert
    expect(mock.config).toBeCalledTimes(4)

    expect(mock.addBase).toBeCalledWith({
      html: {
        fontSize: '16px',
        '@media screen and (min-width: 480px)': {
          fontSize: 'calc(16px + 4 * ((100vw - 480px) / 720))'
        },
        '@media screen and (min-width: 1200px)': { fontSize: '20px' }
      }
    })
  })
})
