import { useEffect } from '@storybook/client-api'
import scripts from '../js/scripts'

export default story => {
  useEffect(scripts)
  return story()
}
