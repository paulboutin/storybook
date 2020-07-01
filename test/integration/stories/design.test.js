import { buildSnapshotTests } from '../utils'

describe('Design', () => {
  const stories = ['colors', 'typography', 'fonts', 'spacing', 'grid']
  buildSnapshotTests('design-system')(stories)
})
