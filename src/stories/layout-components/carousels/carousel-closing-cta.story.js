import React from 'react'
import { number, text } from '@storybook/addon-knobs'
import ClosingCTACarousel from '../../../components/layout/ClosingCTACarousel'
import Button from '../../../components/base/Button'
import Link from '../../../components/base/Link'

const options = {
  range: true,
  min: 2,
  max: 10,
  step: 1
}

const defaultItems = [
  {
    image: '/img/trees.png',
    title: 'Lorem',
    text:
      'ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, dolorem.'
  },
  {
    image: '/img/trees.png',
    title: 'Lorem',
    text:
      'ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, dolorem.'
  },
  {
    image: '/img/trees.png',
    title: 'Lorem',
    text:
      'ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, dolorem.'
  }
]

export const ClosingCTA = () => {
  const items = []
  const cards = number('Items', defaultItems.length, options, 'config')
  const headline = text('Headline', 'Headline', 'config')

  for (let i = 0; i < cards; i++) {
    const defaultColumn = defaultItems[i] || defaultItems[0]
    const prefix = `Card ${i + 1}`

    items.push({
      title: text('Title', defaultColumn.title, prefix),
      text: text('Text', defaultColumn.text, prefix),
      image: text('Image', defaultColumn.image, prefix)
    })
  }

  return (
    <ClosingCTACarousel headline={headline} items={items}>
      <Button type='secondary' label='Button CTA' />
      <Link>Link CTA</Link>
    </ClosingCTACarousel>
  )
}

export default {
  title: 'Layout Components/Carousels',
  parameters: {
    'in-dsm': {
      id: '5f29d6055418d54690b90ce3'
    }
  }
}
