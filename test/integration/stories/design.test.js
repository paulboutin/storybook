import { buildSnapshotTests } from '../utils'

describe('Design System', () => {
  const stories = [
    {
      title: 'colors',
      component: 'colors',
      devices: ['mobile', 'desktop']
    },
    {
      title: 'typography',
      component: 'typography',
      devices: ['mobile', 'desktop']
    },
    {
      title: 'fonts',
      component: 'fonts',
      devices: ['mobile']
    },
    {
      title: 'spacing',
      component: 'spacing',
      devices: ['desktop']
    },
    {
      title: 'grid',
      component: 'grid'
    },
    {
      title: 'font-icons',
      component: 'font-icons',
      devices: ['mobile']
    },
    {
      title: 'image-icons',
      component: 'image-icons',
      devices: ['desktop']
    }
  ]
  buildSnapshotTests('design-system')(stories)
})
