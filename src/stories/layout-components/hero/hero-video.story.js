import React from 'react'
import VideoHero from '../../../components/layout/VideoHero'
import { text } from '@storybook/addon-knobs'

export const Video = () => {
  const video = text('Video', '/vid/hero-background.mp4')
  return <VideoHero video={video} poster='/img/hero-background.jpg' />
}

export default {
  title: 'Layout Components/Hero',
  parameters: {
    'in-dsm': {
      id: '5f29d50e914d5c330e1ba096'
    }
  }
}
