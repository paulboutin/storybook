import React from 'react'
import { array } from '@storybook/addon-knobs'

const defaultItems = [
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, architecto.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta eius, magni molestias nihil repellat.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam consectetur dolorum eos ipsam ipsum magnam ' +
    'maxime, perspiciatis possimus quis reiciendis repellendus tenetur voluptatem voluptatum.'
]

export const Legal = () => {
  const items = array('Items', defaultItems, ';')

  return (
    <div className='legal'>
      <div className='legal-spacer' />
      <h2 className='legal-heading'>All the legal stuff</h2>
      <ol className='legal-list'>
        {items.map((item, index) => (
          <li className='legal-list-item' key={index}>
            {item}
          </li>
        ))}
      </ol>
    </div>
  )
}
