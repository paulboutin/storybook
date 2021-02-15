import React from 'react'
import Hero, {
  defaultEyebrow,
  defaultText,
  defaultTitle
} from '../../../components/layout/Hero'
import { text } from '@storybook/addon-knobs'

export const Full = () => {
  const image = text('Image', '/img/trees.png')
  const eyebrow = text('Eyebrow', defaultEyebrow)
  const title = text('Title', defaultTitle)
  const textContent = text('Text', defaultText)

  return (
    <Hero
      type='full'
      image={image}
      eyebrow={eyebrow}
      text={textContent}
      title={title}
    />
  )
}

export default {
  title: 'Layout Components/Hero',
  parameters: {
    'in-dsm': {
      id: '5f29cd5d914d5c53721ba079'
    }
  }
}
