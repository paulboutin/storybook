import React from 'react'
import CardCarousel from '../layout/CardCarousel'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'
import Callout from '../layout/Callout'

const items = prefix => [
  {
    type: 'services-icon',
    heading: 'Individuals and Families',
    image: prefixImagePath({
      prefix,
      src: '/wealth/expertise/BOTW_Wealth_Expertise_Individuals.svg'
    }),
    href:
      'https://www.bankofthewest.com/wealth-management/who-we-serve/individuals-families'
  },
  {
    type: 'services-icon',
    heading: 'Private Business and Entrepreneurs',
    image: prefixImagePath({
      prefix,
      src: '/wealth/expertise/BOTW_Wealth_Expertise_Business.svg'
    }),
    href:
      'https://www.bankofthewest.com/wealth-management/who-we-serve/private-business-owners'
  },
  {
    type: 'services-icon',
    heading: 'Ultra High Net Worth',
    image: prefixImagePath({
      prefix,
      src: '/wealth/expertise/BOTW_Wealth_Expertise_NetWorth.svg'
    }),
    href:
      'https://www.bankofthewest.com/wealth-management/who-we-serve/key-client-group-america'
  },
  {
    type: 'services-icon',
    heading: 'International',
    image: prefixImagePath({
      prefix,
      src: '/wealth/expertise/BOTW_Wealth_Expertise_International.svg'
    }),
    href:
      'https://www.bankofthewest.com/commercial-banking/international/global-capabilities'
  }
]

const WealthExpertiseCarouselPartial = ({
  imgPath = config.PRERENDER_IMAGE_PATH
}) => (
  <>
    <Callout
      className='no-padding-bottom'
      title='Expertise to serve you'
      text="Work with an advisor who'll take a comprehensive approach to meet your financial goals"
    />
    <CardCarousel items={items(imgPath)} />
  </>
)

export default WealthExpertiseCarouselPartial
