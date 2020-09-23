import React from 'react'
import ClosingCTA from '../../../components/layout/ClosingCTA'
import { text } from '@storybook/addon-knobs'

export const TwoColumns = () => {
  const image = text('Image', 'http://via.placeholder.com/800x500')
  return <ClosingCTA type='2col' image={image} />
}

export default {
  title: 'Layout Components/Closing CTA'
}
