import React from 'react'
import CardCarousel from '../layout/CardCarousel'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'

const items = prefix => [
  {
    type: 'standard',
    tag: 'Treasury Solutions',
    heading: 'Balancing Risks and Rewards in the Push to Digitize',
    subtext: '2 minutes read',
    image: prefixImagePath({
      prefix,
      src: '/commercial/BOTW_Commercial_Articles_Balancing-Risks.jpg'
    }),
    href:
      'https://perspectives.bankofthewest.com/treasury-solutions/balancing-risks-and-rewards-in-the-push-to-digitize',
    tagHref: 'https://perspectives.bankofthewest.com/treasury-solutions'
  },
  {
    type: 'standard',
    tag: 'Global Finance',
    heading: 'Real-Time Business: Are Your Payments Prepared?',
    subtext: '1 minute read',
    image: prefixImagePath({
      prefix,
      src: '/commercial/BOTW_Commercial_Articles_Real-time-Business.jpg'
    }),
    href:
      'https://perspectives.bankofthewest.com/international-finance/real-time-business-are-your-payments-prepared',
    tagHref: 'https://perspectives.bankofthewest.com/international-finance'
  },
  {
    type: 'standard',
    tag: 'Global Finance',
    heading: 'Six Keys to Remove Treasury Management',
    subtext: '2 minutes read',
    image: prefixImagePath({
      prefix,
      src: '/commercial/BOTW_Commercial_Articles_Six-keys.jpg'
    }),
    href:
      'https://perspectives.bankofthewest.com/international-finance/six-keys-to-remote-treasury-management',
    tagHref: 'https://perspectives.bankofthewest.com/international-finance'
  },
  {
    type: 'standard',
    tag: 'Global Finance',
    heading: 'Pandemic Accelerates Change in U.S. Wine Business',
    subtext: '1 minutes read',
    image: prefixImagePath({
      prefix,
      src: '/commercial/BOTW_Commercial_Articles_Pandemic-Accelerates.jpg'
    }),
    href:
      'https://perspectives.bankofthewest.com/food-and-agribusiness/pandemic-accelerates-transformative-change-in-u-s-wine-business',
    tagHref: 'https://perspectives.bankofthewest.com/food-and-agribusiness'
  },
  {
    type: 'text-only',
    heading: 'Discover Additional Resources',
    href: 'https://perspectives.bankofthewest.com'
  }
]

const CommercialArticlesPartial = ({
  imgPath = config.PRERENDER_IMAGE_PATH
}) => <CardCarousel items={items(imgPath)} />

export default CommercialArticlesPartial
