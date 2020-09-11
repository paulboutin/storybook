import React from 'react'
import * as comparisons from '../../../components/layout/Comparison'
import { radios, text } from '@storybook/addon-knobs'

export const ComparisonStory = () => {
  const type = radios('Type', ['Cards', 'Table'], 'Cards')
  let style
  let image

  if (type === 'Cards') {
    style = radios('Style', ['Regular', 'Highlight', 'Branded'], 'Regular')
    style = style.toLowerCase()

    if (style === 'branded') {
      image = text('Image', 'http://via.placeholder.com/640')
    }
  }

  const Comparison = comparisons['Comparison' + type]
  return <Comparison style={style} image={image} />
}

ComparisonStory.story = {
  name: 'Comparison'
}
