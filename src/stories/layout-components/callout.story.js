import React from 'react'
import Callout from '../../components/layout/Callout'
import { text } from '@storybook/addon-knobs'

export const CalloutStory = () => {
  const title = text(
    'Title',
    'Together, we can safeguard the environment and the future of our planet.'
  )
  const txt = text(
    'Text',
    'It is a long established fact that a reader will be distracted by the readable.'
  )
  return <Callout title={title} text={txt} />
}

CalloutStory.story = {
  name: 'Callout'
}

export default {
  title: 'Layout Components',
  parameters: {
    'in-dsm': {
      id: '5f29d35c914d5c57b21ba08a'
    }
  }
}
