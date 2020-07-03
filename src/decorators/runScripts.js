import { useEffect } from '@storybook/client-api'

export default story => {
  useEffect(() => {
    Object.keys(require.cache).forEach(key => {
      delete require.cache[key]
    })
    require('../js/scripts')
  })
  return story()
}
