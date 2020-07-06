import { buildSnapshotTests } from '../utils'

describe('Base Components', () => {
  const stories = ['icons', 'card-story']
  buildSnapshotTests('components-base')(stories)
})
