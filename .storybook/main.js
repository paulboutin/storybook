const path = require('path')

module.exports = {
  stories: ['../src/stories/**/*.stories.js'],
  addons: [
    '@whitespace/storybook-addon-html/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register'
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src')
    })
    return config
  }
}
