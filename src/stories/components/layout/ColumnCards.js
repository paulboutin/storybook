import React from 'react'
import ColumnCards from '../../../components/layout/ColumnCards'
import Card from '../../../components/base/Card'
import { text } from '@storybook/addon-knobs'

const defaultImage = 'http://via.placeholder.com/640x480'

const heading = 'More reasons to love your account'

const items = [
  {
    heading: 'Online banking',
    text:
      'Manage your finances on your own time. Bank online as you would at a branch.'
  },
  {
    heading: 'Zelle',
    text:
      'Zelle lets you send or request money to anyone, regardless of their U.S. bank.'
  },
  {
    heading: 'Bill pay',
    text:
      'Pay your bills online, and avoid late fees when you automate your payments.'
  }
]

const linkText = 'Read more'

export const ColumnCardsStory = () => {
  const image = text('Image', defaultImage)

  return (
    <>
      <ColumnCards heading={heading}>
        {items.map((item, index) => (
          <Card
            key={index}
            image={{ src: image, alt: 'image' }}
            heading={item.heading}
            linkText={linkText}
            flat
          >
            {item.text}
          </Card>
        ))}
      </ColumnCards>
      <ColumnCards heading={heading} inverted>
        {items.map((item, index) => (
          <Card
            key={index}
            image={{ src: image, alt: 'image' }}
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
  name: 'Column Cards'
}
