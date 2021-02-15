const env = require('env-var')
const { configureToMatchImageSnapshot } = require('jest-image-snapshot')
const { slugify } = require('../../src/utils')

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  comparisonMethod: 'ssim',
  failureThreshold: env
    .get('SNAPSHOT_DIFF_THRESHOLD')
    .default('0.01')
    .asFloatPositive(),
  failureThresholdType: 'percent',
  customSnapshotIdentifier: ({ currentTestName }) => {
    return slugify(currentTestName).replace('matches-snapshot-on-', '')
  }
})

expect.extend({ toMatchImageSnapshot })

jest.setTimeout(30000)
