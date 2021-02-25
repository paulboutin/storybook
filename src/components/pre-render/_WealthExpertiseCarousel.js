import React from 'react'
import CardCarousel from '../layout/CardCarousel'
import { prefixImagePath } from '../../utils'

const items = [
  {
    type: 'services',
    heading: 'Individuals and Families',
    image: {
      src: prefixImagePath({
        src: '/wealth/BOTW_Wealth_Expertise_Individual.png'
      }),
      alt: 'Individuals and Families'
    },
    href:
      'https://www.bankofthewest.com/wealth-management/who-we-serve/individuals-families'
  },
  {
    type: 'services',
    heading: 'High Net Worth',
    image: {
      src: prefixImagePath({
        src: '/wealth/BOTW_Wealth_Expertise_HighNet.png'
      }),
      alt: 'High Net Worth'
    },
    href:
      'https://www.bankofthewest.com/wealth-management/who-we-serve/key-client-group-america'
  },
  {
    type: 'services',
    heading: 'Private Business and Entrepreneurs',
    image: {
      src: prefixImagePath({
        src: '/wealth/BOTW_Wealth_Expertise_PrivateBusiness.png'
      }),
      alt: 'Private Business and Entrepreneurs'
    },
    href:
      'https://www.bankofthewest.com/wealth-management/who-we-serve/private-business-owners'
  },
  {
    type: 'services',
    heading: 'International',
    image: {
      src: prefixImagePath({
        src: '/wealth/BOTW_Wealth_Expertise_International.png'
      }),
      alt: 'International'
    },
    href:
      'https://www.bankofthewest.com/commercial-banking/international/global-capabilities'
  }
]

const CarouselPartial = () => <CardCarousel items={items} />

export default CarouselPartial
