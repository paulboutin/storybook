import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import SearchMapComponent from '../../components/layout/SearchMap'

export const SearchMap = () => {
  const title = text('Title', 'Headline Lorem Ipsum')
  const textContent = text('Text', 'Lorem Ipsum sub-headline example.')
  const placeholder = text('Placeholder', 'Search...')
  const background = text('Background', '/img/trees.png')
  const eyebrow = {
    enable: boolean('Enable Eyebrow', true),
    text: text('Eyebrow Text', 'Eyebrow')
  }

  return (
    <SearchMapComponent
      title={title}
      text={textContent}
      eyebrow={eyebrow}
      placeholder={placeholder}
      background={background}
    />
  )
}

export default {
  title: 'Layout Components'
}
