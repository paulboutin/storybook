import React from 'react'
import Eyebrow from '../../../components/base/Eyebrow'
import { text, radios } from '@storybook/addon-knobs'

const defaultText = 'Mobile banking'

export const EyebrowStory = () => {
  const placeholder = text('Text', defaultText)
  const type = radios('Type', ['Standard', 'Alt'], 'Standard')

  return <Eyebrow text={placeholder} alt={type === 'Alt'} />
}

EyebrowStory.story = {
  name: 'Eyebrow'
}
