import React from 'react'
import ColumnIcons from '../../../components/layout/ColumnIcons'
import { radios, boolean, text } from '@storybook/addon-knobs'
import icon1 from '../../../icons/img/lock-card.svg'
import icon2 from '../../../icons/img/cc-options.svg'
import icon3 from '../../../icons/img/card-services.svg'

const defaultColumns = [
  {
    icon: icon1,
    title: 'Debit card? Yes!',
    text: 'Use it anywhere that accepts a Mastercard debit card.'
  },
  {
    icon: icon2,
    title: 'Overdraft protection? Yes!',
    text:
      'We can all lose track of our spending. Check out our overdraft programs.'
  },
  {
    icon: icon3,
    title: 'Mobile wallet? Yes!',
    text: 'Use it anywhere that accepts a Mastercard debit card.'
  },
  {
    icon: icon1,
    title: 'Lorem ipsum? Yes!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    icon: icon2,
    title: 'Lorem ipsum? Yes!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    icon: icon3,
    title: 'Lorem ipsum? Yes!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
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
      icon: text(`${prefix} Icon`, defaultColumn.icon, 'content'),
      title: text(`${prefix} Title`, defaultColumn.title, 'content'),
      text: text(`${prefix} Text`, defaultColumn.text, 'content')
    })
  }

  return <ColumnIcons columns={columns} inverted={inverted} />
}

ColumnIconsStory.story = {
  name: 'Column Icons'
}
