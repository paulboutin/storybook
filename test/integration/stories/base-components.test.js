import { buildSnapshotTests } from '../utils'
import { BUTTON_TYPES } from '../../../src/stories/components/base/Button'

describe('Base Components', () => {
  const stories = [
    ...BUTTON_TYPES.map(type => ({
      title: `button ${type.toLowerCase()}`,
      component: 'button-story',
      devices: ['mobile'],
      'knob-Type': type
    })),
    {
      title: 'link inline',
      component: 'link-story',
      devices: ['mobile'],
      'knob-Type': 'Inline'
    },
    {
      title: 'link cta',
      component: 'link-story',
      devices: ['mobile'],
      'knob-Type': 'CTA'
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
