import { buildDefaultSnapshotTests } from '../utils'

describe('Layout Components', () => {
  const stories = [
    {
      title: 'list-element standard',
      component: 'list-element',
      'knob-Type': 'Standard'
    },
    {
      title: 'list-element alt',
      component: 'list-element',
      'knob-Type': 'Alt'
    },
    {
      title: 'closing-cta standard',
      component: 'closing-cta',
      'knob-Type': 'Standard'
    },
    { title: 'closing-cta alt', component: 'closing-cta', 'knob-Type': 'Alt' },
    { title: 'hero full', component: 'hero', 'knob-Type': 'Full' },
    { title: 'hero spaced', component: 'hero', 'knob-Type': 'Spaced' },
    { title: 'recommendations', component: 'recommendations' },
    { title: 'faq', component: 'faq' }
  ]
  buildDefaultSnapshotTests('components-layout')(stories)
})
