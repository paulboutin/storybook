import React from 'react'
import classNames from 'classnames'
import { Card } from '../base/Card'
import { text } from '@storybook/addon-knobs'

const defaultPlaceholder = 'http://via.placeholder.com/500x250'

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

export const ThreeCol = ({ heading, children, bgColor }) => (
  <div className={classNames('three-col', bgColor || '')}>
    <div className='container'>
      <h2 className='three-col-heading'>{heading}</h2>
      <div className='row'>
        {children.map((child, index) => (
          <div key={index} className='col-sm-4'>
            {child}
          </div>
        ))}
      </div>
    </div>
  </div>
)

export const ThreeColCards = () => {
  const placeholder = text('Placeholder', defaultPlaceholder)

  return (
    <>
      <ThreeCol heading={heading}>
        {items.map((item, index) => (
          <Card key={index} imageSrc={placeholder} heading={item.heading} flat>
            {item.text}
          </Card>
        ))}
      </ThreeCol>
      <ThreeCol heading={heading} bgColor='grey'>
        {items.map((item, index) => (
          <Card key={index} imageSrc={placeholder} heading={item.heading} flat>
            {item.text}
          </Card>
        ))}
      </ThreeCol>
    </>
  )
}

ThreeColCards.story = {
  name: '3Col Cards'
}
