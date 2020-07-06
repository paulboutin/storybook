import { buildDefaultSnapshotTests } from '../utils'

describe('Design', () => {
  const stories = ['colors', 'typography', 'fonts', 'spacing', 'grid']
  buildDefaultSnapshotTests('design-system')(stories)
})
