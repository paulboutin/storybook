import { buildDefaultSnapshotTests } from '../utils'

describe('Base Components', () => {
  const stories = ['card-story']
  buildDefaultSnapshotTests('components-base')(stories)
})
