import React from 'react'
import { radios, text } from '@storybook/addon-knobs'
import ColumnCards from '../../components/layout/ColumnCards'
import Card, { defaultItems } from '../../components/base/Card'

const defaultImage = 'http://via.placeholder.com/500'

export const CardsThreeColumn = () => {
  const items = []
  const image = text('Image', defaultImage)
  const cards = Number(
    radios('Cards', ['2', '3', '4', '5', '6'], '3', 'config')
  )

  for (let i = 0; i < cards; i++) {
    const defaultColumn = defaultItems[i] || defaultItems[0]
    const prefix = `Card ${i + 1} -`

    items.push({
      heading: text(`${prefix} Heading`, defaultColumn.heading, 'content'),
      text: text(`${prefix} Text`, defaultColumn.text, 'content')
    })
  }

  const heading = 'Recommended for you'
  const linkText = 'View All'

  return (
    <ColumnCards columns={cards} heading={heading}>
      {items.map((item, index) => (
        <Card
          key={index}
          heading={item.heading}
          linkText={linkText}
          image={{ src: image, alt: 'image' }}
        >
          {item.text}
        </Card>
      ))}
    </ColumnCards>
  )
}

export default {
  title: 'Layout Components',
  parameters: {
    'in-dsm': {
      id: '5f29d31ab0d2dea9c17d82a0'
    }
  }
}
