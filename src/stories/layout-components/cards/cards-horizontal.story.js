import React from 'react'
import { text, number } from '@storybook/addon-knobs'
import ColumnCards from '../../../components/layout/ColumnCards'
import Card, { defaultItems } from '../../../components/base/Card'

const defaultImage = 'http://via.placeholder.com/640x480'

const options = {
  range: true,
  min: 2,
  max: 6,
  step: 1
}

export const Horizontal = () => {
  const items = []
  const cards = number('Cards', 3, options, 'config')

  for (let i = 0; i < cards; i++) {
    const defaultColumn = defaultItems[i] || defaultItems[0]
    const prefix = `Card ${i + 1}`

    items.push({
      heading: text('Heading', defaultColumn.heading, prefix),
      text: text('Text', defaultColumn.text, prefix),
      image: text('Image', defaultImage, prefix)
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
          image={{ src: item.image, alt: 'image' }}
        >
          {item.text}
        </Card>
      ))}
    </ColumnCards>
  )
}

export default {
  title: 'Layout Components/Cards',
  parameters: {
    'in-dsm': {
      id: '601d63e1f8349be804595507'
    }
  }
}
