import React from 'react'
import Highlight from '../../../components/layout/Highlight'
import { text } from '@storybook/addon-knobs'

const defaultImage = 'http://via.placeholder.com/640'

export const HighlightStory = ({ type }) => {
  let images

  if (type === 'overlap-image') {
    images = [
      text('Background image', defaultImage),
      text('Foreground image', defaultImage)
    ]
  } else {
    images = [text('Image', defaultImage)]
  }

  return (
    <div>
      <Highlight type={type} images={images} color='primary' />
      <Highlight
        type={type}
        images={images}
        position='reverse'
        color='secondary'
      />
    </div>
  )
}
