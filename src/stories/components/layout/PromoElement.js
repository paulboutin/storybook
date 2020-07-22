import React from 'react'
import classNames from 'classnames'
import { radios, text } from '@storybook/addon-knobs'
import AppCTA from '../../../components/base/AppCTA'
import Link from '../../../components/base/Link'
import PromoElement from '../../../components/layout/PromoElement'

const eyebrow = 'Sustainable banking'
const heading = 'The strongest environmental stance of any major bank.'
const defaultText =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

const defaultPlaceholder = 'http://via.placeholder.com/480x640'
const defaultSquarePlaceholder = 'http://via.placeholder.com/640'

const classes = {
  Standard: '',
  Full: 'full',
  'Accent Square': 'accent square',
  'Accent Dark': 'accent dark'
}

export const PromoElementStory = () => {
  const type = radios(
    'Type',
    ['Standard', 'Full', 'Accent Square', 'Accent Dark'],
    'Standard'
  )
  const placeholder = text('Placeholder', defaultPlaceholder)
  const squarePlaceholder = text('Square Placeholder', defaultSquarePlaceholder)
  let cta

  switch (type) {
    case 'Accent Square':
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
    default:
      cta = (
        <>
          <Link standalone>See all you can do in mobile banking</Link>
          <AppCTA />
        </>
      )
  }

  return (
    <PromoElement
      heading={heading}
      type={classes[type]}
      text={defaultText}
      eyebrow={eyebrow}
      image={{
        src: type === 'Accent Square' ? squarePlaceholder : placeholder,
        alt: 'Promo image'
      }}
    >
      {cta}
    </PromoElement>
  )
}

PromoElementStory.story = {
  name: 'Promo Element'
}
