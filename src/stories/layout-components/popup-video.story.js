import React from 'react'
import PopupVideo, { defaults } from '../../components/layout/PopupVideo'
import { text, boolean } from '@storybook/addon-knobs'

export const PopupVideoStory = () => {
  const props = {
    eyebrowEnable: boolean('Enable Eyebrow', defaults.eyebrowEnable),
    eyebrow: text('Eyebrow', defaults.eyebrow),
    title: text('Title', defaults.title),
    text: text('Text', defaults.text),
    src: text('Video', defaults.src),
    poster: text('Poster', defaults.poster),
    alt: text('Poster Alt', defaults.posterAlt)
  }

  return <PopupVideo {...props} />
}

PopupVideoStory.story = {
  name: 'Popup Video'
}

export default {
  title: 'Layout Components',
  parameters: {
    'in-dsm': {
      id: '5f29d647914d5c524e1ba0a6'
    }
  }
}
