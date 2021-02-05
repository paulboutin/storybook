import React from 'react'
import { text, number } from '@storybook/addon-knobs'
import ColumnCards from '../../../components/layout/ColumnCards'
import Card, { defaultItems } from '../../../components/base/Card'

const options = {
  range: true,
  min: 2,
  max: 6,
  step: 1
}

const defaultImage = 'http://via.placeholder.com/640x480'

export const Vertical = () => {
  const items = []
  const cards = number('Cards', 3, options, 'config')

  const heading = 'Recommended for you'
  const linkText = 'View All'

  for (let i = 0; i < cards; i++) {
    const defaultColumn = defaultItems[i] || defaultItems[0]
    const prefix = `Card ${i + 1}`

    items.push({
      heading: text('Heading', defaultColumn.heading, prefix),
      text: text('Text', defaultColumn.text, prefix),
      image: text('Image', defaultImage, prefix)
    })
  }

  return (
    <ColumnCards columns={1} heading={heading}>
      {items.map((item, index) => (
        <Card
          className='card-horizontal'
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
      id: '601d63e552946d0ec178574c'
    }
  }
}
