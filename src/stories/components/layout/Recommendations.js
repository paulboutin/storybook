import React from 'react'
import { text } from '@storybook/addon-knobs'

import { ThreeCol } from './3Col'
import { Card } from '../base/Card'

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

const defaultPlaceholder = 'http://via.placeholder.com/500'

export const Recommendations = () => {
  const placeholder = text('Placeholder', defaultPlaceholder)

  const heading = 'Recommended for you'

  return (
    <ThreeCol heading={heading}>
      {items.map((item, index) => (
        <Card key={index} heading={item.heading} imageSrc={placeholder}>
          {item.text}
        </Card>
      ))}
    </ThreeCol>
  )
}
