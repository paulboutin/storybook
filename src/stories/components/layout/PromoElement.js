import React from 'react'
import classNames from 'classnames'
import { boolean, radios } from '@storybook/addon-knobs'
import Link from '../../../components/base/Link'
import PromoElement from '../../../components/layout/PromoElement'

const eyebrow = 'Sustainable banking'
const heading = 'The strongest environmental stance of any major bank.'
const text =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

const classes = {
  Standard: '',
  Accent: 'accent',
  'Accent Dark': 'accent dark'
}

export const PromoElementStory = () => {
  const type = radios('Type', ['Standard', 'Accent', 'Accent Dark'], 'Standard')
  const full = boolean('Full', false)

  return (
    <PromoElement
      heading={heading}
      type={classNames(classes[type], full && 'full')}
      text={text}
      eyebrow={eyebrow}
      image={{ src: 'http://via.placeholder.com/640x480', alt: 'Hero' }}
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
