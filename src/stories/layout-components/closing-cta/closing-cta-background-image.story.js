import React from 'react'
import { text } from '@storybook/addon-knobs'
import ClosingCTAStory from './closing-cta'

export const BackgroundImage = () => {
  const image = text('Image', '/img/trees.png', 'content')
  return <ClosingCTAStory type='bgi' image={image} />
}

export default {
  title: 'Layout Components/Closing CTA',
  parameters: {
    'in-dsm': {
      id: '5f29d405914d5c4ebf1ba091'
    }
  }
}
