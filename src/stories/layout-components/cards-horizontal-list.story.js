import React from 'react'
import CardsHorizontalList, {
  defaultItems
} from '../../components/layout/CardsHorizontalList'
import { radios, text } from '@storybook/addon-knobs'

export const CardsHorizontalListStory = () => {
  const items = []
  const columnNumber = Number(
    radios('Items', ['2', '3', '4', '5', '6'], '3', 'config')
  )

  for (let i = 0; i < columnNumber; i++) {
    const defaultColumn = defaultItems[i] || defaultItems[0]
    const prefix = `Item ${i + 1} -`

    items.push({
      title: text(`${prefix} Title`, defaultColumn.heading, 'content'),
      text: text(`${prefix} Text`, defaultColumn.text, 'content')
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
