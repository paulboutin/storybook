import { buildSnapshotTests } from '../utils'

describe('Design', () => {
  const stories = ['list-element-with-header', 'list-element-with-image']
  buildSnapshotTests('components')(stories)
})
