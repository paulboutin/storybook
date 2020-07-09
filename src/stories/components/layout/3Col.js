import React from 'react'
import { Card } from '../base/Card'
import { text } from '@storybook/addon-knobs'

const defaultPlaceholder = 'http://via.placeholder.com/500x250'

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

const ThreeCol = ({ children }) => (
  <div className='three-col'>
    <h2 className='three-col-heading'>More reasons to love your account</h2>
    <div className='row'>
      {children.map((child, index) => (
        <div key={index} className='col-sm-4'>
          {child}
        </div>
      ))}
    </div>
  </div>
)

export const ThreeColCards = () => {
  const placeholder = text('Placeholder', defaultPlaceholder)

  return (
    <ThreeCol>
      {items.map((item, index) => (
        <Card key={index} imageSrc={placeholder} heading={item.heading} flat>
          {item.text}
        </Card>
      ))}
    </ThreeCol>
  )
}

ThreeColCards.story = {
  name: '3Col Cards'
}
