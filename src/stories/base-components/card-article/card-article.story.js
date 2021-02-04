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
  const heading = text(
    'Heading',
    'Real-Time Business: Are Your Payments Prepared?'
  )

  if ([options.Standard, options.Video].includes(type)) {
    tag = text('Tag', 'Global Finance')
    subtext = text('Subtext', '9min read')
  }

  if (type === options.Standard) {
    image = text('Image', 'http://via.placeholder.com/640')
  }

  return (
    <div className='sb:card sb:card-article'>
      <CardArticle
        type={type}
        image={{ src: image }}
        tag={tag}
        heading={heading}
        subtext={subtext}
      />
    </div>
  )
}

export default {
  title: 'Base Components/Card'
}
