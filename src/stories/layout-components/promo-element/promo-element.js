import React from 'react'
import AppCTA from '../../../components/base/AppCTA'
import Link from '../../../components/base/Link'
import PromoElement from '../../../components/layout/PromoElement'
import Button from '../../../components/base/Button'
import { text } from '@storybook/addon-knobs'

const defaultImage = 'http://via.placeholder.com/480x640'
const defaultEyebrow = 'Sustainable banking'
const defaultHeading = 'The strongest environmental stance of any major bank.'
const defaultText =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

export const PromoElementStory = ({ type }) => {
  const image = text('Image', defaultImage)
  const eyebrow = text('Eyebrow', defaultEyebrow)
  const heading = text('Heading', defaultHeading)
  const textContent = text('Text', defaultText)

  let cta

  if (type === 'accent square') {
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
      eyebrow={eyebrow}
      heading={heading}
      text={textContent}
      image={{
        src: image,
        alt: 'Promo image'
      }}
    >
      {cta}
    </PromoElement>
  )
}
