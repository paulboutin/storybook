import { buildDefaultSnapshotTests } from '../utils'

describe('Base Components', () => {
  const stories = ['icons', 'card-story']
  buildDefaultSnapshotTests('components-base')(stories)
})
