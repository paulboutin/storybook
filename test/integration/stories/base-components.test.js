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
      component: 'card-story'
    },
    {
      title: 'card flat',
      component: 'card-story',
      'knob-Type': 'Flat'
    },
    {
      title: 'input',
      component: 'input-story',
      devices: ['mobile']
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
    }
  ]
  buildSnapshotTests('components-base')(stories)
})
