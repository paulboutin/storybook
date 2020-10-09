import React from 'react'
import Hero from '../../../components/layout/Hero'
import { text } from '@storybook/addon-knobs'

export const Spaced = () => {
  const image = text('Image', 'http://via.placeholder.com/1600')
  return <Hero type='spaced' image={image} />
}

export default {
  title: 'Layout Components/Hero',
  parameters: {
    'in-dsm': {
      id: '5f29ccfd914d5caffd1ba077'
    }
  }
}