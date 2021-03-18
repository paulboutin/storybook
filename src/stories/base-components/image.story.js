import React from 'react'
import Image, { ratios } from '../../components/base/Image'
import { text } from '@storybook/addon-knobs'

export const ImageStory = () => {
  const src = text('Image', '/img/trees.png')

  return (
    <div className='sb:image'>
      {ratios.map(ratio => (
        <div className='sb:image-wrapper'>
          <Image ratio={ratio} src={src} alt='Image' />
          <p className='sb:image-ratio'>Ratio {ratio}</p>
        </div>
      ))}

      <div className='sb:image-wrapper'>
        <Image ratio='1:1' src={src} alt='Image' className='rounded' />
        <p className='sb:image-ratio'>Rounded</p>
      </div>
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
