import React from 'react'
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

const placeholder = 'http://via.placeholder.com/500'

export const Recommendations = () => {
  return (
    <div className='recommendations'>
      <h2 className='recommendations-heading'>Recommended for you</h2>
      <div className='recommendations-content'>
        {items.map((item, index) => (
          <div key={index} className='recommendations-col'>
            <Card
              heading={item.heading}
              text={item.text}
              imageSrc={placeholder}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
