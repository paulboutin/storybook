import '@storybook/addon-backgrounds/register'
import '@storybook/addon-knobs/register'
import '@storybook/addon-viewport/register'

if (process.env.STORYBOOK_DSM) {
  const { registerDsm } = require('@invisionapp/dsm-storybook/register')
  registerDsm(process.env.STORYBOOK_DSM)
} else {
  require('@whitespace/storybook-addon-html/register')
}
