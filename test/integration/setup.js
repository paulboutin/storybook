const { configureToMatchImageSnapshot } = require('jest-image-snapshot')

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customDiffConfig: {
    threshold: 0
  },
  customSnapshotIdentifier: ({ currentTestName }) => {
    return currentTestName
      .replace(/\s/g, '-')
      .toLowerCase()
      .replace('matches-snapshot-on-', '')
  }
})

expect.extend({ toMatchImageSnapshot })
