import React from 'react'
import { radios } from '@storybook/addon-knobs'
import { PromoElementStory } from './promo-element'

const options = {
  Standard: 'standard',
  Alt: 'alt'
}

export const Standard = () => {
  const type = radios('Type', options, options.Standard)

  return <PromoElementStory type={type} />
}

export default {
  title: 'Layout Components/Promo Element',
  parameters: {
    'in-dsm': {
      id: '5f29c9b5b0d2de6fd47d8137'
    }
  }
}
