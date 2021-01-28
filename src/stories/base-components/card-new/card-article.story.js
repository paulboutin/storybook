import React from 'react'
import CardNew from '../../../components/base/CardNew'
import { radios, text } from '@storybook/addon-knobs'

const options = {
  Standard: 'standard',
  Text: 'text-only'
}

export const Article = () => {
  let tag, subtext, image

  const type = radios('Type', options, options.Standard)
  const heading = text(
    'Heading',
    'Real-Time Business: Are Your Payments Prepared?'
  )

  if (type === options.Standard) {
    tag = text('Tag', 'Global Finance')
    subtext = text('Subtext', '9min read')
    image = text('Image', 'http://via.placeholder.com/640')
  }

  return (
    <div className='sb:card sb:card-new'>
      <CardNew
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
  title: 'Base Components/Card New'
}
