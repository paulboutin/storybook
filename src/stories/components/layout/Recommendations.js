import React from 'react'
import { text } from '@storybook/addon-knobs'
import ColumnCards from '../../../components/layout/ColumnCards'
import Card from '../../../components/base/Card'

const items = [
  {
    heading: 'Still not sure about any Deposit Checking?',
    text: 'Check out our Premier Checking account'
  },
  {
    heading: 'Want to start saving instead?',
    text: 'Learn about our Money Market Plus account'
  },
  {
    heading: 'How to pick a checking account?',
    text: 'We will help you to decide what is best for you'
  }
]

const defaultImage = 'http://via.placeholder.com/500'

export const RecommendationsStory = () => {
  const image = text('Image', defaultImage)

  const heading = 'Recommended for you'

  const linkText = 'Read more'

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

RecommendationsStory.story = {
  name: 'Recommendations'
}
