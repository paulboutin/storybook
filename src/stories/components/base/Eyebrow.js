import React from 'react'
import Eyebrow from '../../../components/base/Eyebrow'
import { text } from '@storybook/addon-knobs'

export const EyebrowStory = () => {
  const txt = text('Text', 'Eyebrow Text')
  return <Eyebrow>{txt}</Eyebrow>
}

EyebrowStory.story = {
  name: 'Eyebrow'
}
