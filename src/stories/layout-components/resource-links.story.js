import React from 'react'
import ResourceLinks, {
  defaultEyebrow,
  defaultText,
  defaultTitle
} from '../../components/layout/ResourceLinks'
import { boolean, text } from '@storybook/addon-knobs'

export const ResourceLinksStory = () => {
  const enableEyebrow = boolean('Eyebrow Enable', true)
  const eyebrow = text('Eyebrow Text', defaultEyebrow)
  const title = text('Title', defaultTitle)
  const textContent = text('Text', defaultText)

  return (
    <ResourceLinks
      eyebrow={{ enable: enableEyebrow, text: eyebrow }}
      title={title}
      text={textContent}
    />
  )
}

ResourceLinksStory.story = {
  name: 'Resource Links'
}

export default {
  title: 'Layout Components',
  parameters: {
    'in-dsm': {
      id: '5f29d6d1914d5c98271ba0a8'
    }
  }
}
