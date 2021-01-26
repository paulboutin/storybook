import React from 'react'
import { text } from '@storybook/addon-knobs'
import ClosingCTAStory from './closing-cta'

export const TwoColumn = () => {
  const image = text('Image', 'http://via.placeholder.com/800x500', 'content')
  return <ClosingCTAStory type='2col' image={image} />
}

export default {
  title: 'Layout Components/Closing CTA',
  parameters: {
    'in-dsm': {
      id: '5f29d43d5418d50192b90ca9'
    }
  }
}
