import { buildSnapshotTests } from '../utils'

describe('Base Components', () => {
  const stories = ['icons']
  buildSnapshotTests('components-base')(stories)
})
