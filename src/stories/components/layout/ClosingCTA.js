import React from 'react'
import { radios, text } from '@storybook/addon-knobs'
import ClosingCTA from '../../../components/layout/ClosingCTA'

const heading =
  'Together, we can safeguard the environment and the future of our planet.'

const typeMap = {
  Standard: '',
  Half: 'half',
  Alt: 'alt'
}

export const ClosingCTAStory = () => {
  const type = radios('Type', ['Standard', 'Half', 'Alt'], 'Standard')
  const image = text('Image', 'http://via.placeholder.com/1600')

  return (
    <ClosingCTA
      type={typeMap[type]}
      image={image}
      heading={heading}
      text='Type Something'
    >
      <a className='button button-tertiary' href='#'>
        Call to Action
      </a>
    </ClosingCTA>
  )
}

ClosingCTAStory.story = {
  name: 'Closing CTA'
}
