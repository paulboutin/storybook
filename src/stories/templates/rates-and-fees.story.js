import React from 'react'
import RatesAndFeesPage, { defaultItems } from './rates-and-fees'

export const RatesAndFees = () => <RatesAndFeesPage accordions={defaultItems} />

RatesAndFees.story = {
  name: 'Rates and Fees'
}

export default {
  title: 'Templates',
  parameters: {
    'in-dsm': {
      id: '5f6bae8f34518443724a7d6e'
    }
  }
}
