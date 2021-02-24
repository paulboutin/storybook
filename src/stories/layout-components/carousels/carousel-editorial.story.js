import React from 'react'
import { number, radios, text } from '@storybook/addon-knobs'
import CardCarousel, {
  defaultItems
} from '../../../components/layout/CardCarousel'

const options = {
  range: true,
  min: 4,
  max: 10,
  step: 1
}

const typeOptions = {
  Standard: 'standard',
  Text: 'text-only',
  Video: 'video'
}

export const Editorial = () => {
  const items = []
  const columnNumber = number('Items', defaultItems.length, options, 'config')

  for (let i = 0; i < columnNumber; i++) {
    const defaultColumn = defaultItems[i] || defaultItems[0]
    const prefix = `item ${i + 1}`

    let tag,
      tagHref,
      subtext,
      image,
      href,
      video = {}

    const type = radios('Type', typeOptions, defaultColumn.type, prefix)
    const heading = text('Heading', defaultColumn.heading, prefix)

    if ([typeOptions.Standard, typeOptions.Video].includes(type)) {
      tag = text('Tag', defaultColumn.tag, prefix)
      tagHref = text('Tag Link', '#', prefix)
      subtext = text('Subtext', defaultColumn.subtext, prefix)
    }

    if (type === typeOptions.Standard) {
      image = text('Image', defaultColumn.image, prefix)
    }

    if (type !== typeOptions.Video) {
      href = text('Link', '#', prefix)
    }

    if (type === typeOptions.Video) {
      video.src = text('Video Source', defaultColumn.src, prefix)
      video.poster = text('Poster', defaultColumn.poster, prefix)
      video.posterAlt = text('Poster Alt', defaultColumn.posterAlt, prefix)
    }

    items.push({
      type,
      heading,
      href,
      subtext,
      tag,
      tagHref,
      image: { src: image },
      ...video
    })
  }

  return <CardCarousel items={items} />
}

export default {
  title: 'Layout Components/Carousels',
  parameters: {
    'in-dsm': {
      id: '601d656e43564b35a7156690'
    }
  }
}
