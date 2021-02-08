import React from 'react'
import Image, { ratios } from '../../components/base/Image'
import { text } from '@storybook/addon-knobs'

export const ImageStory = () => {
  const src = text('Image', 'http://via.placeholder.com/640x480')

  return (
    <div className='sb:image'>
      {ratios.map(ratio => (
        <div className='sb:image-wrapper'>
          <Image ratio={ratio} src={src} alt='Image' />
          <p className='sb:image-ratio'>Ratio {ratio}</p>
        </div>
      ))}
    </div>
  )
}

ImageStory.story = {
  name: 'Image'
}

export default {
  title: 'Base Components',
  parameters: {
    'in-dsm': {
      id: '6014c4bcbb248e9dbe727488'
    }
  }
}
