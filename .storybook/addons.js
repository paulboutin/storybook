import '@whitespace/storybook-addon-html/register'
import registerAddonCode from '@whitespace/storybook-addon-code/register'

registerAddonCode({
  tabs: [
    { label: 'SCSS', lang: 'scss' },
    { label: 'JavaScript', lang: 'javascript', matchFiles: 'js' }
  ]
})
