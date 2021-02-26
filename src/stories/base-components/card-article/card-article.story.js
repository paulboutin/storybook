import React from 'react'
import CardArticle from '../../../components/base/CardArticle'
import { radios, text } from '@storybook/addon-knobs'

const options = {
  Standard: 'standard',
  Text: 'text-only',
  Video: 'video'
}

export const Article = () => {
  let tag, subtext, image

  const type = radios('Type', options, options.Standard)
  const heading = text('Heading', 'Heading')

  if ([options.Standard, options.Video].includes(type)) {
    tag = text('Tag', 'Label')
    subtext = text('Subtext', 'Length of article')
  }

  if (type === options.Standard) {
    image = text('Image', '/img/trees.png')
  }

  return (
    <div className='sb:card sb:card-article'>
      <CardArticle
        type={type}
        image={image}
        tag={tag}
        heading={heading}
        subtext={subtext}
      />
    </div>
  )
}

export default {
  title: 'Base Components/Card',
  parameters: {
    'in-dsm': {
      id: '601d013652946df3de78574a'
    }
  }
}
