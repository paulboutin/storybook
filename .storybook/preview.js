import { addDecorator, addParameters } from '@storybook/html'
import { withKnobs } from '@storybook/addon-knobs'
import { withDsm } from '@invisionapp/dsm-storybook'
import { withHTML } from '@whitespace/storybook-addon-html/html'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import renderHTML from '../src/decorators/renderHTML'
import toggleBodyClass from '../src/decorators/toggleBodyClass'
import runScripts from '../src/decorators/runScripts'
import '../src/sass/stories/main.scss'

addDecorator(renderHTML)
addDecorator(toggleBodyClass)
addDecorator(runScripts)
addDecorator(withKnobs)
addDecorator(withDsm)
addDecorator(withHTML)

addParameters({
  knobs: {
    escapeHTML: false
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      laptop: {
        name: 'Laptop',
        styles: {
          width: '1440px',
          height: '900px'
        },
        type: 'desktop'
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1920px',
          height: '1080px'
        },
        type: 'desktop'
      }
    }
  }
})
