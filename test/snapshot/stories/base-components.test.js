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
      path: 'base-components-checkbox--checkbox-story',
      devices: ['desktop']
    },
    ...['inline', 'standalone'].map(type => ({
      title: `link ${type}`,
      path: `base-components-link--${type}`,
      devices: ['mobile', 'tablet']
    })),
    ...['standard', 'flat', 'article', 'services'].map(type => ({
      title: `card ${type}`,
      path: `base-components-card--${type}`,
      devices: ['mobile', 'tablet']
    })),
    ...['outline', 'underline'].map(type => ({
      title: `input ${type}`,
      path: `base-components-input--${type}`,
      devices: ['mobile']
    })),
    {
      title: 'image ratio',
      path: 'base-components--image-story',
      devices: ['desktop']
    },
    {
      title: 'switch off',
      path: 'base-components-button--switch-story',
      devices: ['mobile']
    },
    {
      title: 'switch on',
      path: 'base-components-button--switch-story',
      devices: ['mobile'],
      callback: async () => {
        await page.click('.switch')
        await page.waitForTransition('.switch-circle')
      }
    },
    {
      title: 'dropdown helper',
      path: 'base-components-dropdown--dropdown-story',
      devices: ['mobile'],
      'knob-Helper': true
    },
    {
      title: 'dropdown error',
      path: 'base-components-dropdown--dropdown-story',
      devices: ['mobile'],
      'knob-Error': true
    },
    {
      title: 'dropdown disabled',
      path: 'base-components-dropdown--dropdown-story',
      devices: ['mobile'],
      'knob-Disabled': true
    },
    {
      title: 'dropdown inline',
      path: 'base-components-dropdown--dropdown-inline-story',
      devices: ['mobile'],
      fullPage: true,
      callback: async () => {
        await page.click('.dropdown')
      }
    },
    {
      title: 'dropdown',
      path: 'base-components-dropdown--dropdown-story',
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
    ...['standard', 'alt'].map(type => ({
      title: `table ${type}`,
      path: `base-components-table--${type}`,
      devices: ['mobile', 'desktop']
    })),
    {
      title: 'radio',
      path: 'base-components-button--radio-story',
      devices: ['desktop']
    },
    {
      title: 'aside',
      path: 'base-components--aside-story',
      devices: ['desktop']
    }
  ]
  buildSnapshotTests(stories)
})
