import React from 'react'
import { number, text } from '@storybook/addon-knobs'
import Infographic, {
  defaultItems
} from '../../../components/layout/Infographic'

const options = {
  range: true,
  min: 4,
  max: 10,
  step: 1
}

export const Alternate = () => {
  let items = []
  const num = number('Items', 6, options, 'config')
  const headline = text('Headline', 'Headline', 'config')
  const textContent = text('Text', 'Lorem ipsum', 'config')

  for (let i = 0; i < num; i++) {
    const defaultColumn = defaultItems[i] || defaultItems[0]
    const prefix = `Item ${i + 1}`

    items.push({
      title: text('Title', defaultColumn.title, prefix),
      text: text('Text', defaultColumn.text, prefix)
    })
  }

  return (
    <Infographic
      background='/img/commercial/BOTW_Commercial_Infographic_World.png'
      headline={headline}
      text={textContent}
      items={items}
    />
  )
}

export default {
  title: 'Layout Components/Infographic',
  parameters: {
    'in-dsm': {
      id: '6048c3573307f104206b6ce8'
    }
  }
}
