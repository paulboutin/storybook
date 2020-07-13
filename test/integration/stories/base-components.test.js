import { buildSnapshotTests } from '../utils'

describe('Base Components', () => {
  const stories = [
    { title: 'card standard', component: 'card-story' },
    { title: 'card flat', component: 'card-story', 'knob-Type': 'Flat' }
  ]
  buildSnapshotTests('components-base')(stories)
})
