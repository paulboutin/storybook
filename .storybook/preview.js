import { withDsm } from '@invisionapp/dsm-storybook'
import { withKnobs } from '@storybook/addon-knobs'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import renderHTML from '../src/decorators/renderHTML'
import toggleBodyClass from '../src/decorators/toggleBodyClass'
import runScripts from '../src/decorators/runScripts'
import '../src/sass/stories/main.scss'

export const parameters = {
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
}

export const decorators = [
  renderHTML,
  toggleBodyClass,
  runScripts,
  withKnobs,
  withDsm
]
