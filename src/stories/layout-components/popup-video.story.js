import React from 'react'
import PopupVideo from '../../components/layout/PopupVideo'
import { text } from '@storybook/addon-knobs'

export const PopupVideoStory = () => {
  const video = text('Video', '/vid/hero-background.mp4')
  return <PopupVideo video={video} poster='/img/hero-background.jpg' />
}

PopupVideoStory.storyName = 'Popup Video'

export default {
  title: 'Layout Components',
  parameters: {
    'in-dsm': {
      id: '5f29d647914d5c524e1ba0a6'
    }
  }
}
