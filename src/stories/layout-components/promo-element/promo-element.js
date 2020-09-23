import React from 'react'
import AppCTA from '../../../components/base/AppCTA'
import Link from '../../../components/base/Link'
import PromoElement from '../../../components/layout/PromoElement'
import Button from '../../../components/base/Button'
import { text } from '@storybook/addon-knobs'

const defaultImage = 'http://via.placeholder.com/480x640'
const eyebrow = 'Sustainable banking'
const heading = 'The strongest environmental stance of any major bank.'
const defaultText =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

export const PromoElementStory = ({ type }) => {
  const image = text('Image', defaultImage)
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
      text={defaultText}
      image={{
        src: image,
        alt: 'Promo image'
      }}
    >
      {cta}
    </PromoElement>
  )
}
