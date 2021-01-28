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
      devices: ['mobile', 'tablet', 'desktop']
    })),
    ...['standard', 'flat'].map(type => ({
      title: `card ${type}`,
      path: `base-components-card-standard--${type}`,
      devices: ['mobile', 'tablet', 'desktop']
    })),
    ...['outline', 'underline'].map(type => ({
      title: `input ${type}`,
      path: `base-components-input--${type}`,
      devices: ['mobile']
    })),
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
      path: 'base-components--radio-story',
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
