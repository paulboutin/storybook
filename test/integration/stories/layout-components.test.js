import { buildSnapshotTests } from '../utils'

describe('Layout Components', () => {
  const stories = [
    {
      title: 'list-element standard',
      component: 'list-element-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Type': 'Standard'
    },
    {
      title: 'list-element alt',
      component: 'list-element-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Type': 'Alt'
    },
    {
      title: 'closing-cta standard',
      component: 'closing-cta-story',
      'knob-Type': 'Standard'
    },
    {
      title: 'closing-cta alt',
      component: 'closing-cta-story',
      'knob-Type': 'Alt'
    },
    {
      title: 'closing-cta half',
      component: 'closing-cta-story',
      'knob-Type': 'Half'
    },
    {
      title: 'hero full',
      component: 'hero-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Type': 'Full'
    },
    {
      title: 'hero spaced',
      component: 'hero-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Type': 'Spaced'
    },
    {
      title: 'recommendations',
      component: 'recommendations-story',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'faq',
      component: 'faq',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'promo-element standard',
      component: 'promo-element-story',
      'knob-Type': 'Standard'
    },
    {
      title: 'promo-element full',
      component: 'promo-element-story',
      'knob-Type': 'Full'
    },
    {
      title: 'promo-element accent square',
      component: 'promo-element-story',
      'knob-Type': 'Accent Square'
    },
    {
      title: 'promo-element accent dark',
      component: 'promo-element-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Type': 'Accent Dark'
    },
    {
      title: 'highlight single',
      component: 'highlight-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Type': 'Single'
    },
    {
      title: 'highlight overlap color',
      component: 'highlight-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Type': 'Overlap',
      'knob-Overlap': 'Color'
    },
    {
      title: 'highlight overlap image',
      component: 'highlight-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Type': 'Overlap',
      'knob-Overlap': 'Image'
    },
    {
      title: 'column cards',
      component: 'column-cards-story'
    },
    {
      title: 'column-icons',
      component: 'column-icons-story',
      devices: ['mobile', 'desktop'],
      'knob-Inverted_config': false
    },
    {
      title: 'column-icons inverted',
      component: 'column-icons-story',
      devices: ['mobile', 'desktop'],
      'knob-Inverted_config': true
    }
  ]
  buildSnapshotTests('components-layout')(stories)
})
