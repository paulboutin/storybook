import React from 'react'
import { text, radios, boolean } from '@storybook/addon-knobs'
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

const sideOptions = {
  Left: 'left',
  Right: 'right'
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
  const reverse = radios('Side', sideOptions, sideOptions.Left)
  const enableEyebrow = boolean('Eyebrow Enable', true)
  const eyebrow = text('Eyebrow Text', 'Bank for the planet')
  const images = [text('Image', defaultImage)]
  const title = text('Title', defaultTitle)
  const textContent = text('Text', defaultText)
  const cta = radios('CTA Content', CTAOptions, CTAOptions.Link)

  return (
    <div>
      <Highlight
        reverse={reverse === 'left'}
        title={title}
        text={textContent}
        type={type}
        images={images}
        color='primary'
        eyebrow={{ enable: enableEyebrow, text: eyebrow }}
      >
        <CTAContent type={cta} />
      </Highlight>
    </div>
  )
}
