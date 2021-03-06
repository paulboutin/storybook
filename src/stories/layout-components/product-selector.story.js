import React from 'react'
import { number, text } from '@storybook/addon-knobs'
import ProductSelector from '../../components/layout/ProductSelector'

const defaultHeadline = 'Headline'

const defaultItems = [
  {
    tab: 'Item 1',
    title: 'Product Title 1',
    text: 'Product information',
    button: 'Label',
    cta: 'Call to Action',
    image: '/img/plant.png'
  },
  {
    tab: 'Item 2',
    title: 'Product Title 2',
    text: 'Product information',
    button: 'Label',
    cta: 'Call to Action',
    image: '/img/trees.png'
  },
  {
    tab: 'Item 3',
    title: 'Product Title 3',
    text: 'Product information',
    button: 'Label',
    cta: 'Call to Action',
    image: '/img/butterfly.png'
  },
  {
    tab: 'Item 4',
    title: 'Product Title 4',
    text: 'Product information',
    button: 'Label',
    cta: 'Call to Action',
    image: '/img/trees.png'
  }
]

const options = {
  range: true,
  min: 3,
  max: 6,
  step: 1
}

export const ProductSelectorStory = () => {
  const items = []
  const cards = number('Cards', defaultItems.length, options, 'config')
  const headline = text('Headline', defaultHeadline, 'config')

  for (let i = 0; i < cards; i++) {
    const defaultColumn = defaultItems[i] || defaultItems[0]
    const prefix = `Item ${i + 1}`

    items.push({
      tab: text('Tab', prefix, prefix),
      title: text('Heading', defaultColumn.title, prefix),
      text: text('Text', defaultColumn.text, prefix),
      image: text('Image', defaultColumn.image, prefix),
      button: { text: text('Button', defaultColumn.button, prefix) },
      cta: { text: text('CTA', defaultColumn.cta, prefix) }
    })
  }

  return <ProductSelector headline={headline} items={items} />
}

ProductSelectorStory.story = {
  name: 'Product Selector'
}

export default {
  title: 'Layout Components',
  parameters: {
    'in-dsm': {
      id: '6021524d01f96f6e10d3479c'
    }
  }
}
