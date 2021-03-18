import React from 'react'
import PullQuoteComponent from '../../components/layout/PullQuote'
import { number, text } from '@storybook/addon-knobs'

const options = {
  range: true,
  min: 2,
  max: 10,
  step: 1
}

const defaultItems = [
  {
    image: '/img/plant.png',
    quote:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry',
    author: {
      name: 'Employee Name',
      role: 'Employee Job Title'
    }
  }
]

export const PullQuote = () => {
  const items = []
  const cards = number('Items', 4, options, 'config')

  for (let i = 0; i < cards; i++) {
    const defaultColumn = defaultItems[i] || defaultItems[0]
    const prefix = `Card ${i + 1}`

    items.push({
      quote: text('Quote', defaultColumn.quote, prefix),
      image: text('Image', defaultColumn.image, prefix),
      author: {
        name: text('Name', defaultColumn.author.name, prefix),
        role: text('Role', defaultColumn.author.role, prefix)
      }
    })
  }

  return <PullQuoteComponent items={items} />
}

export default {
  title: 'Layout Components',
  parameters: {
    'in-dsm': {
      id: '5f29d798b0d2de1f1c7d82e5'
    }
  }
}
