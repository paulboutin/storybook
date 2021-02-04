import React from 'react'
import AppCTA from '../../../components/base/AppCTA'
import Link from '../../../components/base/Link'
import PromoElement from '../../../components/layout/PromoElement'
import Button from '../../../components/base/Button'
import { text, boolean } from '@storybook/addon-knobs'

const defaultImage = 'http://via.placeholder.com/480x640'
const defaultEyebrow = 'Sustainable banking'
const defaultHeading = 'The strongest environmental stance of any major bank.'
const defaultText =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

export const PromoElementStory = ({ type }) => {
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
    cta = <Button type='tertiary' label='Call to Action' link />
  } else {
    cta = (
      <>
        <Link standalone>See all you can do in mobile banking</Link>
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
