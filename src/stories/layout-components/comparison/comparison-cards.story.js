import React from 'react'
import { ComparisonCards } from '../../../components/layout/Comparison'
import { radios, text } from '@storybook/addon-knobs'

export const Cards = () => {
  let image
  let style = radios('Style', ['Regular', 'Highlight', 'Branded'], 'Regular')
  style = style.toLowerCase()

  if (style === 'branded') {
    image = text('Image', 'http://via.placeholder.com/640')
  }

  return <ComparisonCards style={style} image={image} />
}

export default {
  title: 'Layout Components/Comparison',
  parameters: {
    'in-dsm': {
      id: '5f29d7ed914d5cd6a81ba0af'
    }
  }
}
