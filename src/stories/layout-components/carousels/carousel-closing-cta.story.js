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
    image: '/img/butterfly.png',
    title: '000',
    text: 'Lorem ipsum'
  }
]

export const ClosingCTA = () => {
  const items = []
  const cards = number('Items', 3, options, 'config')
  const headline = text('Headline', 'Headline', 'config')
  const button = text('Button Text', 'Button CTA', 'config')
  const link = text('Link Text', 'Link CTA', 'config')

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
      <Button type='secondary' label={button} />
      <Link>{link}</Link>
    </ClosingCTACarousel>
  )
}

export default {
  title: 'Layout Components/Carousels',
  parameters: {
    'in-dsm': {
      id: '603ce8f28a3603c36a64131f'
    }
  }
}
