import { buildSnapshotTests } from '../utils'

describe('Base Components', () => {
  const stories = ['card-story']
  buildSnapshotTests('components-base')(stories)
})
