import React from 'react'
import { ComparisonCards } from '../../components/layout/Comparison'
import { ComparisonTable } from '../../components/layout/Comparison'
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

export const Table = () => <ComparisonTable />

export default {
  title: 'Layout Components/Comparison'
}
