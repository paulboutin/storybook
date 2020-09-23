import { buildSnapshotTests } from '../utils'

describe('Design System', () => {
  const stories = [
    {
      title: 'colors',
      path: 'design-system--colors',
      devices: ['mobile', 'desktop']
    },
    {
      title: 'typography',
      path: 'design-system--typography',
      devices: ['mobile', 'desktop']
    },
    {
      title: 'fonts',
      path: 'design-system--fonts',
      devices: ['mobile']
    },
    {
      title: 'spacing',
      path: 'design-system--spacing',
      devices: ['desktop']
    },
    {
      title: 'grid',
      path: 'design-system--grid'
    },
    {
      title: 'font-icons',
      path: 'design-system--font-icons',
      devices: ['mobile']
    },
    {
      title: 'image-icons',
      path: 'design-system--image-icons',
      devices: ['desktop']
    }
  ]
  buildSnapshotTests(stories)
})
