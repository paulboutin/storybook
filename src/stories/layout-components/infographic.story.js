import React from 'react'
import { boolean, number, radios, text } from '@storybook/addon-knobs'
import {
  Infographic,
  InfographicBox,
  InfographicBoxImage,
  defaultItems
} from '../../components/layout/Infographic'

const numberOptions = {
  range: true,
  min: 3,
  max: 6,
  step: 1
}

const typeOptions = {
  Text: 'text',
  Image: 'image'
}

export const InfographicStory = () => {
  const items = []

  const starBirds = boolean('Starbirds', true, 'config')
  const cards = 3 // number('Items', 3, numberOptions, 'config')

  for (let i = 0; i < cards; i++) {
    const defaultColumn = defaultItems[i] || defaultItems[0]

    const type = radios('Type', typeOptions, typeOptions.Text, `card ${i + 1}`)

    let title = ''
    let content = ''

    if (type === typeOptions.Text) {
      title = text('Title', defaultColumn.title, `card ${i + 1}`)
      content = text('Text', defaultColumn.content, `card ${i + 1}`)
    } else {
      content = text(
        'Image',
        'http://via.placeholder.com/400x400',
        `card ${i + 1}`
      )
    }

    items.push({
      type,
      title,
      content
    })
  }

  return (
    <Infographic className={starBirds ? 'infographic-star-birds' : ''}>
      {items.map(({ type, title, content }) => {
        switch (type) {
          case typeOptions.Text:
            return <InfographicBox title={title}>{content}</InfographicBox>
          case typeOptions.Image:
            return <InfographicBoxImage src={content} />
          default:
            return null
        }
      })}
    </Infographic>
  )
}

InfographicStory.story = {
  name: 'Infographic'
}

export default {
  title: 'Layout Components',
  parameters: {
    'in-dsm': {
      id: '5f29d4c5b0d2de46c17d82aa'
    }
  }
}
