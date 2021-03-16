import React from 'react'
import { number, text, radios } from '@storybook/addon-knobs'
import Carousel from '../../../components/layout/Carousel'

const options = {
  range: true,
  min: 2,
  max: 10,
  step: 1
}

const radioOptions = {
  Link: 'link',
  Button: 'button',
  Off: ''
}

const defaultItems = [
  {
    image: '/img/trees.png',
    title: 'Investment Services',
    text:
      'Investing doesn’t have to be so complicated. Start on your own terms.',
    linkText: 'Learn more',
    type: 'link'
  },
  {
    image: '/img/trees.png',
    title: 'Checking Accounts',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    linkText: 'Learn more',
    type: 'link'
  },
  {
    image: '/img/trees.png',
    title: 'Savings Accounts',
    text:
      'A alias atque consectetur doloremque ea eligendi eveniet explicabo id.',
    linkText: 'Learn more',
    type: 'link'
  },
  {
    image: '/img/trees.png',
    title: 'Certificates of Deposit',
    text: 'Amet asperiores atque aut beatae consequuntur delectus dicta.',
    linkText: 'Learn more',
    type: 'link'
  },
  {
    image: '/img/trees.png',
    title: 'Investment Services',
    text:
      'Autem corporis culpa dolor eius est facilis harum maxime minima necessitatibus nemo.',
    linkText: 'Learn more',
    type: 'link'
  },
  {
    image: '/img/trees.png',
    title: 'Checking Accounts',
    text: 'Atque harum id magnam mollitia nostrum!',
    linkText: 'Learn more',
    type: 'link'
  },
  {
    image: '/img/trees.png',
    title: 'Savings Accounts',
    text: 'Assumenda beatae excepturi ipsam ipsum maiores minima nemo numquam.',
    linkText: 'Learn more',
    type: 'link'
  },
  {
    image: '/img/trees.png',
    title: 'Certificates of Deposit',
    text: 'Ad corporis delectus ea est, fugit modi mollitia neque nisi.',
    linkText: 'Learn more',
    type: 'link'
  }
]

export const Single = () => {
  const items = []
  const cards = number('Items', defaultItems.length, options, 'config')
  const eyebrow = text('Eyebrow', 'Recommended', 'config')

  for (let i = 0; i < cards; i++) {
    const defaultColumn = defaultItems[i] || defaultItems[0]
    const prefix = `Card ${i + 1}`

    items.push({
      title: text('Title', defaultColumn.title, prefix),
      text: text('Text', defaultColumn.text, prefix),
      image: text('Image', defaultColumn.image, prefix),
      linkText: text('Link text', defaultColumn.linkText, prefix),
      type: radios('Type', radioOptions, defaultColumn.type, prefix)
    })
  }

  return <Carousel eyebrow={eyebrow} items={items} />
}

export default {
  title: 'Layout Components/Carousels',
  parameters: {
    'in-dsm': {
      id: '5f29d6055418d54690b90ce3'
    }
  }
}
