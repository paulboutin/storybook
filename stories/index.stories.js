import { withHTML } from '@whitespace/storybook-addon-html/html'
import '../sass/main.scss'

export default {
  title: 'Demo',
  decorators: [
    withHTML
  ]
}

export const Heading = () => '<h1>Hello World</h1>'

export const Button = () => {
  const btn = document.createElement('button')
  btn.type = 'button'
  btn.innerText = 'Hello Button'
  btn.addEventListener('click', e => console.log(e))
  return btn
}
