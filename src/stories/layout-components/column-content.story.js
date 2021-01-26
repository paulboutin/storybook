import React from 'react'
import ColumnCards from '../../components/layout/ColumnCards'
import Card from '../../components/base/Card'
import { number, text } from '@storybook/addon-knobs'

const heading = 'More reasons to love your account'

const defaultItems = [
  {
    title: 'Online banking',
    text:
      'Manage your finances on your own time. Bank online as you would at a branch.',
    image: 'http://via.placeholder.com/640x480'
  },
  {
    title: 'Zelle',
    text:
      'Zelle lets you send or request money to anyone, regardless of their U.S. bank.',
    image: 'http://via.placeholder.com/640x480'
  },
  {
    title: 'Bill pay',
    text:
      'Pay your bills online, and avoid late fees when you automate your payments.',
    image: 'http://via.placeholder.com/640x480'
  }
]

const options = {
  range: true,
  min: 2,
  max: 6,
  step: 1
}

const linkText = 'Read more'

export const ColumnCardsStory = () => {
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

  return (
    <>
      <ColumnCards heading={heading} columns={columnNumber}>
        {items.map((item, index) => (
          <Card
            key={index}
            image={{ src: item.image, alt: 'image' }}
            heading={item.heading}
            linkText={linkText}
            flat
          >
            {item.text}
          </Card>
        ))}
      </ColumnCards>
      <ColumnCards heading={heading} columns={columnNumber} inverted>
        {items.map((item, index) => (
          <Card
            key={index}
            image={{ src: item.image, alt: 'image' }}
            heading={item.heading}
            linkText={linkText}
            flat
          >
            {item.text}
          </Card>
        ))}
      </ColumnCards>
    </>
  )
}

ColumnCardsStory.story = {
  name: 'Column Content'
}

export default {
  title: 'Layout Components',
  parameters: {
    'in-dsm': {
      id: '5f29d2b85418d5594fb90c98'
    }
  }
}
