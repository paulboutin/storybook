import { renderToStaticMarkup } from 'react-dom/server'

export const mount = (markup, fn) => {
  document.body.innerHTML = renderToStaticMarkup(markup)
  fn()

  return document.body.childNodes[0]
}
