const fs = require('fs')

const defaults = ['base.css']
const components = fs
  .readdirSync('tailwind-build/split')
  .filter(file => !defaults.includes(file))

const scss = [...defaults, ...components]
  .map(file => `@import '${file}';`)
  .join('\n')
fs.writeFileSync('tailwind-build/split/main.scss', scss)
