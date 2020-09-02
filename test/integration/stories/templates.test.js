import { buildSnapshotTests } from '../utils'

describe('Templates', () => {
  const stories = [
    {
      title: 'product-page',
      component: 'product-page',
      devices: ['desktop']
    },
    {
      title: 'comparison-page',
      component: 'comparison-page',
      devices: ['desktop']
    }
  ]
  buildSnapshotTests('templates')(stories)
})
