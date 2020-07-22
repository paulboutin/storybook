import React from 'react'
import classNames from 'classnames'
import { radios, text, boolean } from '@storybook/addon-knobs'
import AppCTA from '../../../components/base/AppCTA'
import Link from '../../../components/base/Link'
import PromoElement from '../../../components/layout/PromoElement'

const eyebrow = 'Sustainable banking'
const heading = 'The strongest environmental stance of any major bank.'
const defaultText =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

const classes = {
  Standard: '',
  Accent: 'accent',
  'Accent Dark': 'accent dark'
}

export const PromoElementStory = () => {
  const type = radios('Type', ['Standard', 'Accent', 'Accent Dark'], 'Standard')
  const image = text('Image', 'http://via.placeholder.com/480x640')
  const full = boolean('Full', false)
  let cta

  switch (type) {
    case 'Accent':
      cta = (
        <button
          className={classNames(
            'button',
            type === 'Standard' ? 'button-primary' : 'button-tertiary'
          )}
        >
          Call to Action
        </button>
      )
      break
    case 'Accent Dark':
      cta = (
        <>
          <Link standalone>See all you can do in mobile banking</Link>
          <AppCTA />
        </>
      )
      break
    default:
      cta = <Link standalone>See all you can do in mobile banking</Link>
  }

  return (
    <PromoElement
      heading={heading}
      type={classNames(classes[type], full && 'full')}
      text={defaultText}
      eyebrow={eyebrow}
      image={{ src: image, alt: 'Promo image' }}
    >
      {cta}
    </PromoElement>
  )
}

PromoElementStory.story = {
  name: 'Promo Element'
}
