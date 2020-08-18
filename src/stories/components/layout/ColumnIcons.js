import React from 'react'
import ColumnIcons from '../../../components/layout/ColumnIcons'
import { radios, boolean, text } from '@storybook/addon-knobs'

const defaultImage = 'http://via.placeholder.com/256'

const defaultColumns = [
  {
    text: 'Debit card? Yes!',
    subtext: 'Use it anywhere that accepts a Mastercard debit card.'
  },
  {
    text: 'Overdraft protection? Yes!',
    subtext:
      'We can all lose track of our spending. Check out our overdraft programs.'
  },
  {
    text: 'Mobile wallet? Yes!',
    subtext: 'Use it anywhere that accepts a Mastercard debit card.'
  },
  {
    text: 'Lorem ipsum? Yes!',
    subtext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    text: 'Lorem ipsum? Yes!',
    subtext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    text: 'Lorem ipsum? Yes!',
    subtext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }
]

export const ColumnIconsStory = () => {
  const columns = []
  const columnNumber = Number(
    radios('Columns', ['2', '3', '4', '5', '6'], '2', 'config')
  )
  const inverted = boolean('Inverted', false, 'config')

  for (let i = 0; i < columnNumber; i++) {
    const defaultColumn = defaultColumns[i] || {}
    const prefix = `Column ${i + 1} -`

    columns.push({
      image: text(`${prefix} Image`, defaultImage, 'content'),
      text: text(`${prefix} Text`, defaultColumn.text, 'content'),
      subtext: text(`${prefix} Subtext`, defaultColumn.subtext, 'content')
    })
  }

  return <ColumnIcons columns={columns} inverted={inverted} />
}

ColumnIconsStory.story = {
  name: 'Column Icons'
}
