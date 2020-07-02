import { buildSnapshotTests } from '../utils'

describe('Layout Components', () => {
  const stories = ['list-element', 'closing-cta', 'hero']
  buildSnapshotTests('components-layout')(stories)
})
