import React from 'react'
import PromoElement from '../../../components/layout/PromoElement'
import Link from '../../../components/base/Link'
import classNames from 'classnames'
import { radios, text } from '@storybook/addon-knobs'

const eyebrow = 'Sustainable banking'
const heading = 'The strongest environmental stance of any major bank.'
const defaultText =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

const classes = {
  Standard: '',
  Accent: 'accent'
}

export const PromoElementStory = () => {
  const type = radios('Type', ['Standard', 'Accent'], 'Standard')
  const image = text('Image', 'http://via.placeholder.com/640')

  return (
    <PromoElement
      heading={heading}
      type={classes[type]}
      text={defaultText}
      eyebrow={eyebrow}
      image={{ src: image, alt: 'Promo image' }}
    >
      {type === 'Accent' ? (
        <button
          className={classNames(
            'button',
            type === 'Standard' ? 'button-primary' : 'button-tertiary'
          )}
        >
          Call to Action
        </button>
      ) : (
        <Link standalone>See all you can do in mobile banking</Link>
      )}
    </PromoElement>
  )
}

PromoElementStory.story = {
  name: 'Promo Element'
}
