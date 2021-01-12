import { buildSnapshotTests } from '../utils'

describe('Design System', () => {
  const stories = [
    ...['colors', 'typography', 'fonts', 'spacing', 'grid'].map(type => ({
      title: `${type}`,
      path: `design-system--${type}`,
      devices: ['mobile', 'desktop']
    })),
    ...['font-icons', 'image-icons'].map(type => ({
      title: `${type}`,
      path: `design-system-icons--${type}`,
      devices: ['mobile', 'desktop']
    }))
  ]
  buildSnapshotTests(stories)
})
