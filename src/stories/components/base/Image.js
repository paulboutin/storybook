import React from 'react'
import Image from '../../../components/base/Image'
import { text, radios } from '@storybook/addon-knobs'

export const ImageStory = () => {
  const src = text('Image', 'http://via.placeholder.com/300x400')
  const ratio = radios('Ratio', ['Auto', '1:1', '4:3'], 'Auto')

  return (
    <Image ratio={ratio} src={src} alt='Image' className='sb:img-wrapper' />
  )
}

ImageStory.story = {
  name: 'Image'
}
