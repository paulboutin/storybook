import { buildSnapshotTests } from '../utils'

describe('Templates', () => {
  const stories = [
    {
      title: 'product page',
      component: 'product-page',
      devices: ['tablet', 'desktop']
    }
  ]
  buildSnapshotTests('templates')(stories)
})
