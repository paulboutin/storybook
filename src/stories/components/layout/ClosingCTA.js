import React from 'react'
import ClosingCTA from '../../../components/layout/ClosingCTA'
import { radios, text } from '@storybook/addon-knobs'

export const ClosingCTAStory = () => {
  const type = radios(
    'Type',
    {
      Standard: 'standard',
      'Background image': 'bgi',
      'Two columns': '2col'
    },
    'standard'
  )

  let image

  if (type !== 'standard') {
    image = text('Image', 'http://via.placeholder.com/1600x1000')
  }

  return <ClosingCTA type={type} image={image} />
}

ClosingCTAStory.story = {
  name: 'Closing CTA'
}
