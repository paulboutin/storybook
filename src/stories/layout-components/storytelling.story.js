import React from 'react'
import { number, text } from '@storybook/addon-knobs'
import StorytellingComponent, {
  defaultItems
} from '../../components/layout/Storytelling'

const options = {
  range: true,
  min: 2,
  max: 5,
  step: 1
}

export const Storytelling = () => {
  const items = []
  const quantity = number('Items', 4, options, 'config')

  for (let i = 0; i < quantity; i++) {
    const defaultColumn = defaultItems[i] || defaultItems[0]
    const prefix = `Card ${i + 1}`

    items.push({
      title: text('Title', defaultColumn.title, prefix),
      text: text('Text', defaultColumn.text, prefix),
      image: text('Image', defaultColumn.image, prefix),
      Content: defaultColumn.Content
    })
  }

  return <StorytellingComponent items={items} />
}

export default {
  title: 'Layout Components'
}
