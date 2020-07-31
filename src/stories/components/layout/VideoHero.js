import React from 'react'
import VideoHero from '../../../components/layout/VideoHero'
import { text } from '@storybook/addon-knobs'

export const VideoHeroStory = () => {
  const video = text('Video', '/vid/hero-background.mp4')
  return <VideoHero video={video} poster='/img/hero-background.jpg' />
}

VideoHeroStory.story = {
  name: 'Video Hero'
}
