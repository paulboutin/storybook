import React from 'react'
import { number, radios, text } from '@storybook/addon-knobs'
import CardCarousel, {
  defaultItems
} from '../../components/layout/CardCarousel'

const options = {
  range: true,
  min: 6,
  max: 10,
  step: 1
}

const typeOptions = {
  Standard: 'standard',
  Text: 'text-only',
  Video: 'video'
}

export const CardCarouselStory = () => {
  const items = []
  const columnNumber = number('Items', defaultItems.length, options, 'config')

  for (let i = 0; i < columnNumber; i++) {
    const defaultColumn = defaultItems[i] || defaultItems[0]
    const prefix = `item ${i + 1}`

    let tag, subtext, image

    const type = radios('Type', typeOptions, defaultColumn.type, prefix)
    const heading = text('Heading', defaultColumn.heading, prefix)

    if ([typeOptions.Standard, typeOptions.Video].includes(type)) {
      tag = text('Tag', 'Global Finance', prefix)
      subtext = text('Subtext', '9min read', prefix)
    }

    if (type === typeOptions.Standard) {
      image = text('Image', 'http://via.placeholder.com/640', prefix)
    }

    items.push({
      type,
      heading,
      subtext,
      tag,
      image: { src: image }
    })
  }

  return <CardCarousel items={items} />
}

CardCarouselStory.story = {
  name: 'Card Carousel'
}

export default {
  title: 'Layout Components'
}
