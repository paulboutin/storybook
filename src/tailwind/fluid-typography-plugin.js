const plugin = require('tailwindcss/plugin')

const fromPx = val => parseInt(val.replace('px', ''))

module.exports = plugin(({ addBase, config }) => {
  const minSize = config('fluidTypography.minSize')
  const maxSize = config('fluidTypography.maxSize')
  const minScreen = config('fluidTypography.minScreen')
  const maxScreen = config('fluidTypography.maxScreen')

  const fontFactor = fromPx(maxSize) - fromPx(minSize)
  const screenFactor = fromPx(maxScreen) - fromPx(minScreen)

  const minMedia = `@media screen and (min-width: ${minScreen})`
  const maxMedia = `@media screen and (min-width: ${maxScreen})`
  const fluidSize = `calc(${minSize} + ${fontFactor} * ((100vw - ${minScreen}) / ${screenFactor}))`

  addBase({
    html: {
      fontSize: minSize,
      [minMedia]: { fontSize: fluidSize },
      [maxMedia]: { fontSize: maxSize }
    }
  })
})
