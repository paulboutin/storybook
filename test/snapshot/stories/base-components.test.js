import { buildSnapshotTests } from '../utils'

describe('Base Components', () => {
  const stories = [
    ...['primary', 'secondary', 'tertiary', 'ghost', 'danger'].map(type => ({
      title: `button ${type}`,
      path: `base-components-button--${type}`,
      devices: ['desktop']
    })),
    {
      title: 'checkbox',
      path: 'base-components--checkbox-story',
      devices: ['desktop']
    },
    {
      title: 'link inline',
      path: 'base-components-link--inline',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'link standalone',
      path: 'base-components-link--standalone',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'card standard',
      path: 'base-components-card--standard',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'card flat',
      path: 'base-components-card--flat',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'input outline',
      path: 'base-components-input--outline',
      devices: ['mobile']
    },
    {
      title: 'input underline',
      path: 'base-components-input--underline',
      devices: ['mobile']
    },
    {
      title: 'image auto ratio',
      path: 'base-components--image-story',
      devices: ['mobile']
    },
    {
      title: 'image 1-1 ratio',
      path: 'base-components--image-story',
      devices: ['mobile'],
      'knob-Ratio': '1:1'
    },
    {
      title: 'image 4-3 ratio',
      path: 'base-components--image-story',
      devices: ['mobile'],
      'knob-Ratio': '4:3'
    },
    {
      title: 'switch off',
      path: 'base-components--switch-story',
      devices: ['mobile']
    },
    {
      title: 'switch on',
      path: 'base-components--switch-story',
      devices: ['mobile'],
      callback: async () => {
        await page.click('.switch')
        await page.waitForTransition('.switch-circle')
      }
    },
    {
      title: 'dropdown helper',
      path: 'base-components--dropdown-story',
      devices: ['mobile'],
      'knob-Helper': true
    },
    {
      title: 'dropdown error',
      path: 'base-components--dropdown-story',
      devices: ['mobile'],
      'knob-Error': true
    },
    {
      title: 'dropdown disabled',
      path: 'base-components--dropdown-story',
      devices: ['mobile'],
      'knob-Disabled': true
    },
    {
      title: 'dropdown inline',
      path: 'base-components--dropdown-story',
      devices: ['mobile'],
      fullPage: true,
      callback: async () => {
        await page.click('.dropdown')
      },
      'knob-Inline': true
    },
    {
      title: 'dropdown',
      path: 'base-components--dropdown-story',
      devices: ['mobile'],
      fullPage: true,
      callback: async () => {
        await page.click('.dropdown')
        await page.hover('.dropdown-item')
      }
    },
    {
      title: 'breadcrumbs',
      path: 'base-components--breadcrumbs-story',
      devices: ['mobile']
    },
    {
      title: 'table standard',
      path: 'base-components-table--standard',
      devices: ['mobile', 'desktop']
    },
    {
      title: 'table alt',
      path: 'base-components-table--alt',
      devices: ['mobile', 'desktop']
    },
    {
      title: 'radio',
      path: 'base-components--radio-story',
      devices: ['desktop']
    }
  ]
  buildSnapshotTests(stories)
})
