import '@whitespace/storybook-addon-html/register'
import '@storybook/addon-backgrounds/register'
import '@storybook/addon-knobs/register'
import '@storybook/addon-viewport/register'
import { registerDsm } from '@invisionapp/dsm-storybook/register'

registerDsm(process.env.STORYBOOK_DSM)
