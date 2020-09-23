import React from 'react'
import ClosingCTA from '../../../components/layout/ClosingCTA'
import { text } from '@storybook/addon-knobs'

export const BackgroundImage = () => {
  const image = text('Image', 'http://via.placeholder.com/1600x1200')
  return <ClosingCTA type='bgi' image={image} />
}

export default {
  title: 'Layout Components/Closing CTA'
}
