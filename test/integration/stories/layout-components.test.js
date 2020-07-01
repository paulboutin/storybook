import { buildSnapshotTests } from '../utils'

describe('Layout Components', () => {
  const stories = ['list-element-with-header', 'list-element-with-image']
  buildSnapshotTests('components-layout')(stories)
})
