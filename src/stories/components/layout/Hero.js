import React from 'react'
import Hero from '../../../components/layout/Hero'
import { radios, text } from '@storybook/addon-knobs'

export const HeroStory = () => {
  const type = radios('Type', ['Full', 'Spaced'], 'Full')
  const image = text('Image', 'http://via.placeholder.com/1600')

  return <Hero type={type} image={image} />
}

HeroStory.story = {
  name: 'Hero'
}
