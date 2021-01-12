import { addons } from '@storybook/addons'
import { getDsmOptions, getDsmTheme } from '@invisionapp/dsm-storybook'

addons.setConfig({
  ...getDsmOptions(process.env.STORYBOOK_DSM),
  theme: {
    ...getDsmTheme(process.env.STORYBOOK_DSM)
  }
})
