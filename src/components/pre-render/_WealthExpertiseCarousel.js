import React from 'react'
import CardCarousel from '../layout/CardCarousel'
import { prefixImagePath } from '../../utils'

const items = [
  {
    type: 'services-icon',
    heading: 'Individuals and Families',
    image: prefixImagePath({
      src: '/wealth/BOTW_Wealth_Expertise_Individual.png'
    }),
    href:
      'https://www.bankofthewest.com/wealth-management/who-we-serve/individuals-families'
  },
  {
    type: 'services-icon',
    heading: 'High Net Worth',
    image: prefixImagePath({
      src: '/wealth/BOTW_Wealth_Expertise_HighNet.png'
    }),
    href:
      'https://www.bankofthewest.com/wealth-management/who-we-serve/key-client-group-america'
  },
  {
    type: 'services-icon',
    heading: 'Private Business and Entrepreneurs',
    image: prefixImagePath({
      src: '/wealth/BOTW_Wealth_Expertise_PrivateBusiness.png'
    }),
    href:
      'https://www.bankofthewest.com/wealth-management/who-we-serve/private-business-owners'
  },
  {
    type: 'services-icon',
    heading: 'International',
    image: prefixImagePath({
      src: '/wealth/BOTW_Wealth_Expertise_International.png'
    }),
    href:
      'https://www.bankofthewest.com/commercial-banking/international/global-capabilities'
  }
]

const CarouselPartial = () => <CardCarousel items={items} />

export default CarouselPartial
