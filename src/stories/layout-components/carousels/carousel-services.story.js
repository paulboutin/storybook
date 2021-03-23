import React from 'react'
import { number, text } from '@storybook/addon-knobs'
import CardCarousel from '../../../components/layout/CardCarousel'

const options = {
  range: true,
  min: 4,
  max: 10,
  step: 1
}

const defaultItems = [
  {
    type: 'services-icon',
    heading: 'Individuals and Families',
    image: '/img/wealth/expertise/BOTW_Wealth_Expertise_Individuals.svg',
    href:
      'https://www.bankofthewest.com/wealth-management/who-we-serve/individuals-families'
  },
  {
    type: 'services-icon',
    heading: 'High Net Worth',
    image: '/img/wealth/expertise/BOTW_Wealth_Expertise_NetWorth.svg',
    href:
      'https://www.bankofthewest.com/wealth-management/who-we-serve/key-client-group-america'
  },
  {
    type: 'services-icon',
    heading: 'Private Business and Entrepreneurs',
    image: '/img/wealth/expertise/BOTW_Wealth_Expertise_Business.svg',
    href:
      'https://www.bankofthewest.com/wealth-management/who-we-serve/private-business-owners'
  },
  {
    type: 'services-icon',
    heading: 'International',
    image: '/img/wealth/expertise/BOTW_Wealth_Expertise_International.svg',
    href:
      'https://www.bankofthewest.com/commercial-banking/international/global-capabilities'
  }
]

export const Services = () => {
  const items = []
  const columnNumber = number('Items', defaultItems.length, options, 'config')

  for (let i = 0; i < columnNumber; i++) {
    const defaultColumn = defaultItems[i] || defaultItems[0]
    const prefix = `item ${i + 1}`

    const heading = text('Heading', defaultColumn.heading, prefix)
    const image = text('Image', defaultColumn.image, prefix)
    const href = text('Link', '#', prefix)

    items.push({
      type: defaultColumn.type,
      heading,
      href,
      image
    })
  }

  return <CardCarousel items={items} />
}

export default {
  title: 'Layout Components/Carousels',
  parameters: {
    'in-dsm': {
      id: '6053a580c0b72685a36e011d'
    }
  }
}
