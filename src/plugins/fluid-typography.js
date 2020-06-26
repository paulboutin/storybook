const plugin = require('tailwindcss/plugin')

const fromPx = val => parseInt(val.replace('px', ''))

module.exports = plugin(({ addBase, config }) => {
  const { minSize, maxSize, minScreen, maxScreen } = config('fluidTypography')

  const fontFactor = fromPx(maxSize) - fromPx(minSize)
  const screenFactor = fromPx(maxScreen) - fromPx(minScreen)

  const maxMedia = `@media screen and (min-width: ${maxScreen})`
  const fluidSize = `calc(${minSize} + ${fontFactor} * ((100vw - ${minScreen}) / ${screenFactor}))`

  const fluidMediaQueries = Object.values(config('theme.screens')).reduce(
    (mediaQueries, width) => {
      return {
        ...mediaQueries,
        [`@media screen and (min-width: ${width})`]: { fontSize: fluidSize }
      }
    },
    {}
  )

  addBase({
    html: {
      fontSize: minSize,
      ...fluidMediaQueries,
      [maxMedia]: { fontSize: maxSize }
    }
  })
})
