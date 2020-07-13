import React from 'react'
import { Card } from '../base/Card'
import { text } from '@storybook/addon-knobs'

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

  return (
    <div className='recommendations'>
      <h2 className='recommendations-heading'>Recommended for you</h2>
      <div className='recommendations-content'>
        {items.map((item, index) => (
          <div key={index} className='recommendations-col'>
            <Card heading={item.heading} imageSrc={placeholder}>
              {item.text}
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
