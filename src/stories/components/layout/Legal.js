import React from 'react'
import Legal from '../../../components/layout/Legal'
import { array } from '@storybook/addon-knobs'

const defaultItems = [
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, architecto.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta eius, magni molestias nihil repellat.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam consectetur dolorum eos ipsam ipsum magnam ' +
    'maxime, perspiciatis possimus quis reiciendis repellendus tenetur voluptatem voluptatum.'
]

export const LegalStory = () => {
  const items = array('Items', defaultItems, ';')
  return <Legal items={items} />
}

LegalStory.story = {
  name: 'Legal'
}
