const { configureToMatchImageSnapshot } = require('jest-image-snapshot')

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customDiffConfig: {
    threshold: 0
  }
})

expect.extend({ toMatchImageSnapshot })
