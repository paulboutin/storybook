import React from 'react'
import { boolean, text, number } from '@storybook/addon-knobs'
import ColumnIcons from '../../components/layout/ColumnIcons'

const defaultColumns = [
  {
    icon: '/icons/img/lock-card.svg',
    title: 'Debit card? Yes!',
    text: 'Use it anywhere that accepts a Mastercard debit card.'
  },
  {
    icon: '/icons/img/cc-options.svg',
    title: 'Overdraft protection? Yes!',
    text:
      'We can all lose track of our spending. Check out our overdraft programs.'
  },
  {
    icon: '/icons/img/card-services.svg',
    title: 'Mobile wallet? Yes!',
    text: 'Use it anywhere that accepts a Mastercard debit card.'
  },
  {
    icon: '/icons/img/lock-card.svg',
    title: 'Lorem ipsum? Yes!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    icon: '/icons/img/cc-options.svg',
    title: 'Lorem ipsum? Yes!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    icon: '/icons/img/card-services.svg',
    title: 'Lorem ipsum? Yes!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }
]

const options = {
  range: true,
  min: 2,
  max: 6,
  step: 1
}

export const ColumnIconsStory = () => {
  const columns = []

  const columnNumber = number('Items', 3, options, 'config')
  const inverted = boolean('Inverted', false, 'config')

  for (let i = 0; i < columnNumber; i++) {
    const defaultColumn = defaultColumns[i] || {}
    const prefix = `Item ${i + 1}`

    columns.push({
      icon: text('Icon', defaultColumn.icon, prefix),
      title: text('Title', defaultColumn.title, prefix),
      text: text('Text', defaultColumn.text, prefix)
    })
  }

  return <ColumnIcons columns={columns} inverted={inverted} />
}

ColumnIconsStory.story = {
  name: 'Column Icons'
}

export default {
  title: 'Layout Components',
  parameters: {
    'in-dsm': {
      id: '5f29d237b0d2de8f867d826d'
    }
  }
}
