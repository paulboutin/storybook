import { useEffect } from '@storybook/client-api'

export default story => {
  useEffect(() => {
    require('../js/scripts')
    return () => {
      const keys = Object.keys(require.cache).filter(key =>
        key.startsWith('./src/js/')
      )
      keys.forEach(key => {
        delete require.cache[key]
      })
    }
  })
  return story()
}
