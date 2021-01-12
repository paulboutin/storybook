import React from 'react'
import ClosingCTA from '../../../components/layout/ClosingCTA'
import { text } from '@storybook/addon-knobs'

export const TwoColumn = () => {
  const image = text('Image', 'http://via.placeholder.com/800x500')
  return <ClosingCTA type='2col' image={image} />
}

export default {
  title: 'Layout Components/Closing CTA/Two Column',
  parameters: {
    'in-dsm': {
      id: '5f29d43d5418d50192b90ca9'
    }
  }
}
