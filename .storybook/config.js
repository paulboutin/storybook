import { addDecorator, addParameters, configure } from '@storybook/html'
import { initDsm } from '@invisionapp/dsm-storybook'
import { withKnobs } from '@storybook/addon-knobs'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import renderHTML from '../src/decorators/renderHTML'
import toggleBodyClass from '../src/decorators/toggleBodyClass'
import runScripts from '../src/decorators/runScripts'
import '../src/sass/stories/main.scss'

addDecorator(renderHTML)
addDecorator(toggleBodyClass)
addDecorator(runScripts)
addDecorator(withKnobs({ escapeHTML: false }))

const customViewports = {
  laptop: {
    name: 'Laptop',
    styles: {
      width: '1440px',
      height: '900px'
    }
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1920px',
      height: '1080px'
    }
  }
}

addParameters({
  viewport: {
    viewports: { ...customViewports, ...INITIAL_VIEWPORTS }
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
