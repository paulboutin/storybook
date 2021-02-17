import fs from 'fs'
import html from 'html'
import path from 'path'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

function convertToKebabCase(string) {
  return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

function convertToTitleCase(string) {
  return string.replace(/([A-Z]+)/g, ' $1').replace(/([A-Z][a-z])/g, ' $1')
}

function baseTemplate({ title, body }) {
  return `
    <!doctype html>
    <html lang="">
    <head>
      <meta charset="utf-8">
        <title>${title}</title>
        <link rel="stylesheet" href="/bundles/bundle.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
    ${body}
    <script src="https://player.vimeo.com/api/player.js"></script>
    <script src="/bundles/main.js"></script>
    </body>
    </html>
  `
}

function mkdir(outDir) {
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true })
  }
}

function renderTemplates() {
  const dir = path.join(path.dirname(__filename), '../components/pre-render')
  const templates = fs.readdirSync(dir)

  const outDir = path.join(path.dirname(__filename), '../../tmp/pre-render')

  mkdir(outDir)

  templates.forEach(template => {
    const inPath = path.join(
      path.dirname(__filename),
      '../components/pre-render',
      template
    )

    import(inPath).then(module => {
      const Component = module.default
      const outPath = path.join(
        outDir,
        convertToKebabCase(template.split('.')[0]) + '.html'
      )

      let output

      if (template.charAt(0) === '_') {
        output = html.prettyPrint(renderToStaticMarkup(<Component />))
      } else {
        output = html.prettyPrint(
          baseTemplate({
            title: convertToTitleCase(template.split('.')[0]),
            body: renderToStaticMarkup(<Component />)
          })
        )
      }

      fs.writeFileSync(outPath, output)
    })
  })

  const base = html.prettyPrint(
    baseTemplate({
      title: '',
      body: ''
    })
  )

  fs.writeFileSync(path.join(outDir, '__base.html'), base)
}

renderTemplates()
