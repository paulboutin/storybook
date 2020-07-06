const plugin = require('tailwindcss/plugin')

const getWidth = col => ((col / 12) * 100).toFixed(6) + '%'
const buildSelector = (...args) => args.join('-')

const buildRowDeclaration = css => ({ '.row': css })

const buildColDeclarations = ({ cols, screens, selectors }) => {
  const base = Object.fromEntries(
    cols.map(([col, css]) => [selectors.base(col), css])
  )

  const responsive = Object.entries(screens).map(([breakpoint, width]) => {
    const mediaQuery = `@media (min-width: ${width})`

    return Object.fromEntries(
      cols.map(([col, css]) => {
        return [selectors.responsive(col, breakpoint), { [mediaQuery]: css }]
      })
    )
  })

  return [base, ...responsive]
}

module.exports = plugin(({ addUtilities, theme }) => {
  const screens = theme('screens')
  const row = { display: 'flex' }
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
  const offsets = [
    ['1', { marginLeft: getWidth(1) }],
    ['2', { marginLeft: getWidth(2) }],
    ['3', { marginLeft: getWidth(3) }],
    ['4', { marginLeft: getWidth(4) }],
    ['5', { marginLeft: getWidth(5) }],
    ['6', { marginLeft: getWidth(6) }],
    ['7', { marginLeft: getWidth(7) }],
    ['8', { marginLeft: getWidth(8) }],
    ['9', { marginLeft: getWidth(9) }],
    ['10', { marginLeft: getWidth(10) }],
    ['11', { marginLeft: getWidth(11) }],
    ['12', { marginLeft: getWidth(12) }]
  ]

  const rowDeclaration = buildRowDeclaration(row)

  const colDeclarations = buildColDeclarations({
    cols,
    screens,
    selectors: {
      base: col => (col !== 'default' ? buildSelector('.col', col) : '.col'),
      responsive: (col, breakpoint) =>
        col !== 'default'
          ? buildSelector('.col', breakpoint, col)
          : buildSelector('.col', breakpoint)
    }
  })

  const offsetDeclarations = buildColDeclarations({
    cols: offsets,
    screens,
    selectors: {
      base: col => buildSelector('.col', 'offset', col),
      responsive: (col, breakpoint) => {
        return buildSelector('.col', breakpoint, 'offset', col)
      }
    }
  })

  addUtilities(rowDeclaration)
  addUtilities(colDeclarations)
  addUtilities(offsetDeclarations)
})
