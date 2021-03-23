import React from 'react'
import { ComparisonCards } from '../../../components/layout/Comparison'
import { radios, text } from '@storybook/addon-knobs'

const options = {
  Standard: 'standard',
  'Alt A': 'branded',
  'Alt B': 'highlight'
}

export const Cards = () => {
  let image
  let style = radios('Style', options, options.Standard)
  style = style.toLowerCase()

  if (style === options['Alt A']) {
    image = text('Image', '/img/trees.png')
  }

  return <ComparisonCards style={style} image={image} />
}

export default {
  title: 'Layout Components/Comparison',
  parameters: {
    'in-dsm': {
      id: '6053d255e8a36b768135185c'
    }
  }
}
