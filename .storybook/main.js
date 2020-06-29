module.exports = {
  stories: ['../src/stories/**/*.stories.js'],
  addons: [
    '@whitespace/storybook-addon-html/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register'
  ]
}