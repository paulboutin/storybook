import { addDecorator, addParameters, configure } from '@storybook/html'
import { withKnobs } from '@storybook/addon-knobs'
import { withHTML } from '@whitespace/storybook-addon-html/html'
import { initDsm } from '@invisionapp/dsm-storybook'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import renderHTML from '../src/decorators/renderHTML'
import toggleBodyClass from '../src/decorators/toggleBodyClass'
import runScripts from '../src/decorators/runScripts'
import '../src/stories/sass/main.scss'

addDecorator(renderHTML)
addDecorator(toggleBodyClass)
addDecorator(runScripts)

addDecorator(
  withKnobs({
    escapeHTML: false
  })
)

addDecorator(withHTML)

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

initDsm({
  addDecorator,
  addParameters,
  callback: () => {
    configure(require.context('../src/stories', true, /\.stories\.js$/), module)
  }
})
