import { buildSnapshotTests } from '../utils'
import { BUTTON_TYPES } from '../../../src/stories/components/base/Button'

describe('Base Components', () => {
  const stories = [
    ...BUTTON_TYPES.map(type => ({
      title: `button ${type.toLowerCase()}`,
      component: 'button-story',
      devices: ['desktop'],
      'knob-Type': type
    })),
    {
      title: 'checkbox',
      component: 'checkbox-story',
      devices: ['mobile', 'desktop']
    },
    {
      title: 'link',
      component: 'link-story',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'card standard',
      component: 'card-story',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'card flat',
      component: 'card-story',
      'knob-Type': 'Flat'
    },
    {
      title: 'input outline',
      component: 'input-story',
      devices: ['mobile'],
      'knob-Type': 'Outline'
    },
    {
      title: 'input underline',
      component: 'input-story',
      devices: ['mobile'],
      'knob-Type': 'Underline'
    },
    {
      title: 'image auto ratio',
      component: 'image-story',
      devices: ['mobile']
    },
    {
      title: 'image 1:1 ratio',
      component: 'image-story',
      devices: ['mobile'],
      'knob-Ratio': '1:1'
    },
    {
      title: 'image 4:3 ratio',
      component: 'image-story',
      devices: ['mobile'],
      'knob-Ratio': '4:3'
    },
    {
      title: 'switch off',
      component: 'switch-story',
      devices: ['mobile']
    },
    {
      title: 'switch on',
      component: 'switch-story',
      devices: ['mobile'],
      callback: async () => {
        await page.click('.switch')
        await page.waitForTransition('.switch-circle')
      }
    },
    {
      title: 'select helper',
      component: 'select-story',
      devices: ['mobile'],
      'knob-Helper': true
    },
    {
      title: 'select error',
      component: 'select-story',
      devices: ['mobile'],
      'knob-Error': true
    },
    {
      title: 'select disabled',
      component: 'select-story',
      devices: ['mobile'],
      'knob-Disabled': true
    },
    {
      title: 'select inline',
      component: 'select-story',
      devices: ['mobile'],
      fullPage: true,
      callback: async () => {
        await page.click('.select')
      },
      'knob-Inline': true
    },
    {
      title: 'select',
      component: 'select-story',
      devices: ['mobile'],
      fullPage: true,
      callback: async () => {
        await page.click('.select')
        await page.hover('.select-item')
      }
    },
    {
      title: 'breadcrumbs',
      component: 'breadcrumbs-story',
      devices: ['mobile']
    },
    {
      title: 'table',
      component: 'table-story',
      devices: ['mobile', 'desktop']
    }
  ]
  buildSnapshotTests('components-base')(stories)
})
