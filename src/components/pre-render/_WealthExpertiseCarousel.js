import React from 'react'
import CardCarousel from '../layout/CardCarousel'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'

const items = prefix => [
  {
    type: 'services-icon',
    heading: 'Individuals and Families',
    image: prefixImagePath({
      prefix,
      src: '/wealth/BOTW_Wealth_Expertise_Individual.png'
    }),
    href:
      'https://www.bankofthewest.com/wealth-management/who-we-serve/individuals-families'
  },
  {
    type: 'services-icon',
    heading: 'Private Business and Entrepreneurs',
    image: prefixImagePath({
      prefix,
      src: '/wealth/BOTW_Wealth_Expertise_PrivateBusiness.png'
    }),
    href:
      'https://www.bankofthewest.com/wealth-management/who-we-serve/private-business-owners'
  },
  {
    type: 'services-icon',
    heading: 'Ultra High Net Worth',
    image: prefixImagePath({
      prefix,
      src: '/wealth/BOTW_Wealth_Expertise_HighNet.png'
    }),
    href:
      'https://www.bankofthewest.com/wealth-management/who-we-serve/key-client-group-america'
  },
  {
    type: 'services-icon',
    heading: 'International',
    image: prefixImagePath({
      prefix,
      src: '/wealth/BOTW_Wealth_Expertise_International.png'
    }),
    href:
      'https://www.bankofthewest.com/commercial-banking/international/global-capabilities'
  }
]

const WealthExpertiseCarouselPartial = ({
  imgPath = config.PRERENDER_IMAGE_PATH
}) => <CardCarousel items={items(imgPath)} />

export default WealthExpertiseCarouselPartial
