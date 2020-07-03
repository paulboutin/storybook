const plugin = require('tailwindcss/plugin')

const getWidth = col => ((col / 12) * 100).toFixed(6) + '%'
const buildSelector = (...args) => args.join('-')

const buildDeclarations = ({ row, cols, screens }) => {
  const base = Object.fromEntries(
    cols.map(([col, css]) => {
      const selector = col !== 'default' ? buildSelector('.col', col) : '.col'

      return [selector, css]
    })
  )

  const [rowClass, css] = row
  base[`.${rowClass}`] = css

  const responsive = Object.entries(screens).map(([breakpoint, width]) => {
    const mediaQuery = `@media (min-width: ${width})`

    return Object.fromEntries(
      cols.map(([col, css]) => {
        const selector =
          col !== 'default'
            ? buildSelector('.col', breakpoint, col)
            : buildSelector('.col', breakpoint)

        return [selector, { [mediaQuery]: css }]
      })
    )
  })

  return [base, ...responsive]
}

module.exports = plugin(({ addUtilities, theme }) => {
  const screens = theme('screens')
  const row = ['row', { display: 'flex' }]
  const cols = [
    ['default', { flex: '1' }],
    ['1', { width: getWidth(1) }],
    ['2', { width: getWidth(2) }],
    ['3', { width: getWidth(3) }],
    ['4', { width: getWidth(4) }],
    ['5', { width: getWidth(5) }],
    ['6', { width: getWidth(6) }],
    ['7', { width: getWidth(7) }],
    ['8', { width: getWidth(8) }],
    ['9', { width: getWidth(9) }],
    ['10', { width: getWidth(10) }],
    ['11', { width: getWidth(11) }],
    ['12', { width: getWidth(12) }]
  ]

  addUtilities(buildDeclarations({ row, cols, screens }))
})
