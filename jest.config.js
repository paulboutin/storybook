module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.test\\.js$',
  setupFilesAfterEnv: ['./config/integration.js']
}
