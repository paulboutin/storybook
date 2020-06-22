module.exports = {
  preset: 'jest-puppeteer',
  roots: ['<rootDir>/integration'],
  setupFilesAfterEnv: ['./config/integration.js']
}
