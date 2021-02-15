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
  min: 2,
  max: 6,
  step: 1
}

const typeOptions = {
  Text: 'text',
  Image: 'image'
}

export const InfographicStory = () => {
  const items = []

  const cards = number('Cards', 3, numberOptions, 'config')
  const starBirds = boolean('Starbirds', true, 'config')

  for (let i = 0; i < cards; i++) {
    const defaultColumn = defaultItems[i] || defaultItems[0]

    const type = radios('Type', typeOptions, typeOptions.Text, `card ${i + 1}`)

    let title = ''
    let content = ''

    if (type === typeOptions.Text) {
      title = text('Title', defaultColumn.title, `card ${i + 1}`)
      content = text('Text', defaultColumn.content, `card ${i + 1}`)
    } else {
      content = text('Image', '/img/plant.png', `card ${i + 1}`)
    }

    items.push({
      type,
      title,
      content
    })
  }

  return (
    <Infographic
      columns={cards}
      className={starBirds ? 'infographic-star-birds' : ''}
    >
      {items.map(({ type, title, content }, idx) => {
        switch (type) {
          case typeOptions.Text:
            return (
              <InfographicBox key={idx} title={title}>
                {content}
              </InfographicBox>
            )
          case typeOptions.Image:
            return <InfographicBoxImage key={idx} src={content} />
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
