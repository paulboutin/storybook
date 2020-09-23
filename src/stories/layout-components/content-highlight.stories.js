import React from 'react'
import Highlight from '../../components/layout/Highlight'
import { text } from '@storybook/addon-knobs'

const defaultImage = 'http://via.placeholder.com/640'

const HighlightStory = ({ type }) => {
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
      <Highlight type={type} images={images} position='right' color='primary' />
      <Highlight
        type={type}
        images={images}
        position='left'
        color='secondary'
      />
    </div>
  )
}

export const Single = () => <HighlightStory type='single' />
export const OverlapImage = () => <HighlightStory type='overlap-image' />
export const OverlapColor = () => <HighlightStory type='overlap-color' />

export default {
  title: 'Layout Components/Content Highlight'
}
