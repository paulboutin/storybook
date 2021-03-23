import React from 'react'
import Hero, {
  defaultEyebrow,
  defaultTitle,
  defaultText
} from '../../../components/layout/Hero'
import { text } from '@storybook/addon-knobs'

export const Spaced = () => {
  const image = text('Image', '/img/trees.png')
  const eyebrow = text('Eyebrow', defaultEyebrow)
  const title = text('Title', defaultTitle)
  const textContent = text('Text', defaultText)

  return (
    <Hero
      type='spaced'
      image={image}
      eyebrow={eyebrow}
      title={title}
      text={textContent}
    />
  )
}

export default {
  title: 'Layout Components/Hero',
  parameters: {
    'in-dsm': {
      id: '6054ca3ce8a36b4c64352adb'
    }
  }
}
