import React from 'react'
import Hero from '../../../components/layout/Hero'
import { text, array } from '@storybook/addon-knobs'

export const Spaced = () => {
  const image = text('Image', 'http://via.placeholder.com/1600')
  const items = array(
    'Options',
    [
      'Arizona',
      'California',
      'Colorado',
      'Idaho',
      'Iowa',
      'Kansas',
      'Minnesota',
      'Missouri',
      'Nebraska',
      'Nevada',
      'New Mexico',
      'North Dakota',
      'Oklahoma',
      'Oregon',
      'South Dakota',
      'Utah',
      'Washington',
      'Wisconsin',
      'Wyoming'
    ],
    '\n'
  )
  return <Hero type='spaced' image={image} items={items} />
}

export default {
  title: 'Layout Components/Hero',
  parameters: {
    'in-dsm': {
      id: '5f29ccfd914d5caffd1ba077'
    }
  }
}
