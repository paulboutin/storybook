import React from 'react'
import Highlight from '../../../components/layout/Highlight'
import { radios, text } from '@storybook/addon-knobs'

const defaultImage = 'http://via.placeholder.com/640'

export const HighlightStory = () => {
  const type = radios('Type', ['Single', 'Overlap'], 'Overlap')
  let overlap
  let images

  if (type === 'Overlap') {
    overlap = radios('Overlap', ['Color', 'Image'], 'Color')
  }

  if (type === 'Single' || overlap === 'Color') {
    images = [text('Image', defaultImage)]
  } else {
    images = [
      text('Background image', defaultImage),
      text('Foreground image', defaultImage)
    ]
  }

  return (
    <div>
      <Highlight
        contentPosition='Right'
        type={type}
        overlap={overlap}
        color='Primary'
        images={images}
      />
      <Highlight
        contentPosition='Left'
        type={type}
        overlap={overlap}
        color='Secondary'
        images={images}
      />
    </div>
  )
}

HighlightStory.story = {
  name: 'Highlight'
}
