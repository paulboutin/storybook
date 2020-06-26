import { addDecorator, addParameters } from '@storybook/html'
import { withKnobs } from '@storybook/addon-knobs'
import { withHTML } from '@whitespace/storybook-addon-html/html'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import '../src/css/main.css'

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
