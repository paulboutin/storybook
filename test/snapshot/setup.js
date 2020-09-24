const { configureToMatchImageSnapshot } = require('jest-image-snapshot')
const { slugify } = require('../../src/utils')

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customDiffConfig: {
    threshold: 0
  },
  customSnapshotIdentifier: ({ currentTestName }) => {
    return slugify(currentTestName).replace('matches-snapshot-on-', '')
  }
})

expect.extend({ toMatchImageSnapshot })

jest.setTimeout(30000)
