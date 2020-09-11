import React from 'react'
import { text } from '@storybook/addon-knobs'
import ColumnCards from '../../../components/layout/ColumnCards'
import Card from '../../../components/base/Card'

const items = [
  {
    heading: 'Lorem Ipsum Header',
    text: 'Check out our Premier Checking account'
  },
  {
    heading: 'Lorem Ipsum Header',
    text: 'Learn about our Money Market Plus account'
  },
  {
    heading: 'Lorem Ipsum Header',
    text: 'We will help you to decide what is best for you'
  }
]

const defaultImage = 'http://via.placeholder.com/500'

export const CardsThreeColumnStory = () => {
  const image = text('Image', defaultImage)

  const heading = 'Recommended for you'

  const linkText = 'View All'

  return (
    <ColumnCards heading={heading}>
      {items.map((item, index) => (
        <Card
          key={index}
          heading={item.heading}
          linkText={linkText}
          image={{ src: image, alt: 'image' }}
        >
          {item.text}
        </Card>
      ))}
    </ColumnCards>
  )
}

CardsThreeColumnStory.story = {
  name: 'Cards Three Column'
}
