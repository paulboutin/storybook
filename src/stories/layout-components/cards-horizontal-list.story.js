import React from 'react'
import CardsHorizontalList, {
  defaultItems
} from '../../components/layout/CardsHorizontalList'
import { text, number } from '@storybook/addon-knobs'

const options = {
  range: true,
  min: 2,
  max: 6,
  step: 1
}

export const CardsHorizontalListStory = () => {
  const items = []
  const columnNumber = number('Items', 3, options, 'config')

  for (let i = 0; i < columnNumber; i++) {
    const defaultColumn = defaultItems[i] || defaultItems[0]
    const prefix = `item ${i + 1}`

    items.push({
      title: text('Title', defaultColumn.title, prefix),
      text: text('Text', defaultColumn.text, prefix),
      image: text('Image', defaultColumn.image, prefix)
    })
  }

  return <CardsHorizontalList items={items} />
}

CardsHorizontalListStory.story = {
  name: 'Cards Horizontal List'
}

export default {
  title: 'Layout Components',
  parameters: {
    'in-dsm': {
      id: '5f29d70a5418d505acb90ce6'
    }
  }
}
