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
    const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
    svgRule.exclude = /\.svg$/

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src')
    })

    return config
  }
}
