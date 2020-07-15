import { buildSnapshotTests } from '../utils'

describe('Base Components', () => {
  const stories = [
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
