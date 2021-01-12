const env = require('env-var')
const { configureToMatchImageSnapshot } = require('jest-image-snapshot')
const { slugify } = require('../../src/utils')

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customDiffConfig: {
    threshold: env
      .get('SNAPSHOT_DIFF_THRESHOLD')
      .default('0')
      .asFloatPositive()
  },
  customSnapshotIdentifier: ({ currentTestName }) => {
    return slugify(currentTestName).replace('matches-snapshot-on-', '')
  }
})

expect.extend({ toMatchImageSnapshot })

jest.setTimeout(30000)
