import { buildSnapshotTests } from '../utils'

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
    {
      title: 'closing-cta alt',
      component: 'closing-cta',
      'knob-Type': 'Alt'
    },
    {
      title: 'hero full',
      component: 'hero',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Type': 'Full'
    },
    {
      title: 'hero spaced',
      component: 'hero',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Type': 'Spaced'
    },
    {
      title: 'recommendations',
      component: 'recommendations',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'faq',
      component: 'faq',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'promo-element standard',
      component: 'promo-element',
      'knob-Type': 'Standard'
    },
    {
      title: 'promo-element alt',
      component: 'promo-element',
      'knob-Type': 'Alt'
    },
    {
      title: 'promo-element accent',
      component: 'promo-element',
      'knob-Type': 'Accent'
    },
    {
      title: 'highlight single',
      component: 'highlight-story',
      'knob-Type': 'Single'
    },
    {
      title: 'highlight overlap color',
      component: 'highlight-story',
      'knob-Type': 'Overlap',
      'knob-Overlap': 'Color'
    },
    {
      title: 'highlight overlap image',
      component: 'highlight-story',
      'knob-Type': 'Overlap',
      'knob-Overlap': 'Image'
    },
    {
      title: '3col cards',
      component: 'three-col-cards'
    },
    {
      title: 'column-icons',
      component: 'column-icons'
    }
  ]
  buildSnapshotTests('components-layout')(stories)
})
