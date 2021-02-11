import React from 'react'
import AppCTA from '../../../components/base/AppCTA'
import Link from '../../../components/base/Link'
import PromoElement from '../../../components/layout/PromoElement'
import Button from '../../../components/base/Button'
import { text, boolean, radios } from '@storybook/addon-knobs'

const defaultImage = '/img/butterfly.png'
const defaultEyebrow = 'Eyebrow'
const defaultHeading = 'Headline'
const defaultText =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

export const PromoSection = ({ type }) => {
  let starBirds = false

  if (type !== 'standard') {
    starBirds = boolean('Starbirds', false)
  }
  const enableEyebrow = boolean('Eyebrow Enable', true)
  const eyebrow = text('Eyebrow Text', defaultEyebrow)
  const image = text('Image', defaultImage)
  const heading = text('Heading', defaultHeading)
  const textContent = text('Text', defaultText)

  let cta

  if (type === 'accent green') {
    cta = <Button type='secondary' label='Apply Now' link />
  } else {
    cta = (
      <>
        <Link standalone>Call to Action</Link>
        <AppCTA />
      </>
    )
  }

  return (
    <PromoElement
      type={type}
      eyebrow={{ enable: enableEyebrow, text: eyebrow }}
      heading={heading}
      text={textContent}
      starBirds={starBirds}
      image={{
        src: image,
        alt: 'Promo image'
      }}
    >
      {cta}
    </PromoElement>
  )
}
