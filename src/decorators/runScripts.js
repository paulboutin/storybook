import { useEffect } from '@storybook/client-api'
import scripts from '../js/main'

export default story => {
  useEffect(scripts)
  return story()
}
