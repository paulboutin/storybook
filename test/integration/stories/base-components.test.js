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
    }
  ]
  buildSnapshotTests('components-base')(stories)
})
