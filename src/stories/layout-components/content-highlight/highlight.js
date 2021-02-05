import React from 'react'
import { text, radios, boolean } from '@storybook/addon-knobs'
import Highlight from '../../../components/layout/Highlight'
import Link from '../../../components/base/Link'
import Button from '../../../components/base/Button'

const defaultImage = 'http://via.placeholder.com/640'
const defaultEyebrow = 'Eyebrow'
const defaultTitle = 'Heading'
const defaultText = 'Lorem ipsum'

const CTAOptions = {
  Link: 'link',
  Button: 'button',
  Off: 'off'
}

const sideOptions = {
  Left: 'left',
  Right: 'right'
}

const CTAContent = ({ type = 'link', text }) => {
  switch (type) {
    case 'link':
      return <Link standalone>{text}</Link>
    case 'button':
      return <Button type='primary' label={text} />
    case 'off':
    default:
      return null
  }
}

export const HighlightStory = ({ type }) => {
  let ctaText

  const reverse = radios('Side', sideOptions, sideOptions.Left)
  const enableEyebrow = boolean('Eyebrow Enable', true)
  const eyebrow = text('Eyebrow Text', defaultEyebrow)
  const images = [text('Image', defaultImage)]
  const title = text('Title', defaultTitle)
  const textContent = text('Text', defaultText)
  const cta = radios('CTA Content', CTAOptions, CTAOptions.Link)

  if ([CTAOptions.Link, CTAOptions.Button].includes(cta)) {
    ctaText = text('CTA Text', 'Call to Action')
  }

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
        <CTAContent type={cta} text={ctaText} />
      </Highlight>
    </div>
  )
}
