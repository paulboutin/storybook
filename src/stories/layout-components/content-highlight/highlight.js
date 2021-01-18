import React from 'react'
import { text, radios } from '@storybook/addon-knobs'
import Highlight from '../../../components/layout/Highlight'
import Link from '../../../components/base/Link'
import Button from '../../../components/base/Button'

const defaultImage = 'http://via.placeholder.com/640'
const defaultTitle = 'The strongest environmental stance of any major bank.'
const defaultText =
  "Our policies are 100% transparent because we're proud of what we finance and what we don't"

const CTAOptions = {
  Link: 'link',
  Button: 'button',
  Off: 'off'
}

const CTAContent = ({ type = 'link' }) => {
  switch (type) {
    case 'link':
      return <Link standalone>Your choice of bank matters</Link>
    case 'button':
      return <Button type='primary' label='Apply Now' />
    case 'off':
    default:
      return null
  }
}

export const HighlightStory = ({ type }) => {
  const images = [text('Image', defaultImage)]
  const eyebrow = text('Eyebrow', 'Bank for the planet')
  const title = text('Title', defaultTitle)
  const textContent = text('Text', defaultText)
  const cta = radios('CTA Content', CTAOptions, CTAOptions.Link)

  return (
    <div>
      <Highlight
        title={title}
        text={textContent}
        type={type}
        images={images}
        color='primary'
        eyebrow={eyebrow}
      >
        <CTAContent type={cta} />
      </Highlight>
      <Highlight
        title={title}
        text={textContent}
        type={type}
        images={images}
        color='secondary'
        eyebrow={eyebrow}
        reverse
      >
        <CTAContent type={cta} />
      </Highlight>
    </div>
  )
}
