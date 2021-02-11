import React from 'react'
import { radios } from '@storybook/addon-knobs'
import { PromoSection } from './promo-section'

const options = {
  Standard: 'standard',
  'Accent Dark': 'accent dark',
  Alt: 'alt'
}

export const Standard = () => {
  const type = radios('Type', options, options.Standard)

  return <PromoSection type={type} />
}

export default {
  title: 'Layout Components/Promo Section',
  parameters: {
    'in-dsm': {
      id: '5f29c9b5b0d2de6fd47d8137'
    }
  }
}
