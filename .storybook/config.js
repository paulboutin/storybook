import { addDecorator, addParameters, configure } from '@storybook/html'
import { initDsm } from '@invisionapp/dsm-storybook'
import { withKnobs } from '@storybook/addon-knobs'
import { withHTML } from '@whitespace/storybook-addon-html/html'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import renderHTML from '../src/decorators/renderHTML'
import toggleBodyClass from '../src/decorators/toggleBodyClass'
import runScripts from '../src/decorators/runScripts'
import '../src/stories/sass/main.scss'

addDecorator(renderHTML)
addDecorator(toggleBodyClass)
addDecorator(runScripts)

addDecorator(withHTML)
addDecorator(withKnobs({ escapeHTML: false }))

const customViewports = {
  desktop: {
    name: 'Desktop',
    styles: {
      width: '100%',
      height: '100%'
    }
  }
}

addParameters({
  viewport: {
    viewports: { ...INITIAL_VIEWPORTS, ...customViewports }
  }
})

const req = require.context('../src/stories', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

initDsm({
  addDecorator,
  addParameters,
  callback: () => configure(req, loadStories)
})
