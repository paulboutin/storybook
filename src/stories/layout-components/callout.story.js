import React from 'react'
import Callout from '../../components/layout/Callout'
import { text, radios, boolean } from '@storybook/addon-knobs'

const defaultTitle =
  'Together, we can safeguard the environment and the future of our planet.'
const defaultText =
  'It is a long established fact that a reader will be distracted by the readable.'

const options = {
  Standard: '',
  Green: 'callout-green'
}

export const CalloutStory = () => {
  const bg = radios('Background Color', options, options.Standard, 'config')
  const centered = boolean('Centered', false, 'config')

  const title = text('Title', defaultTitle, 'content')
  const txt = text('Text', defaultText, 'content')

  let classes = bg

  if (centered) {
    classes += ' callout-centered'
  }

  return <Callout title={title} text={txt} className={classes} />
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
