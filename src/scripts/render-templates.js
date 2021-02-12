import fs from 'fs'
import html from 'html'
import path from 'path'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

function convertToKebabCase(string) {
  return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
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
    <script src="/bundles/bundle.js"></script>
    </body>
    </html>
  `
}

function renderTemplates() {
  const dir = path.join(path.dirname(__filename), '../components/templates')
  const templates = fs.readdirSync(dir)

  const outDir = path.join(path.dirname(__filename), '../../tmp/templates')

  templates.forEach(template => {
    const inPath = path.join(
      path.dirname(__filename),
      '../components/templates',
      template
    )

    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true })
    }

    import(inPath).then(module => {
      const Component = module.default
      const outPath = path.join(
        outDir,
        convertToKebabCase(template.split('.')[0]) + '.html'
      )

      const output = html.prettyPrint(
        baseTemplate({
          title: template,
          body: renderToStaticMarkup(<Component />)
        })
      )

      fs.writeFileSync(outPath, output)
    })
  })

  const base = html.prettyPrint(
    baseTemplate({
      title: '',
      body: ''
    })
  )

  fs.writeFileSync(path.join(outDir, '_base.html'), base)
}

renderTemplates()
