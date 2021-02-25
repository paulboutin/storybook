import React from 'react'
import CardCarousel from '../layout/CardCarousel'
import { prefixImagePath } from '../../utils'

const items = [
  {
    type: 'standard',
    tag: 'Living',
    heading: 'Impact investing and creating a sustainable recovery',
    subtext: '2 minutes read',
    image: prefixImagePath({
      src: '/wealth/BOTW_Wealth_Articles_Impact.jpg'
    }),
    href:
      'https://meansandmatters.bankofthewest.com/article/living/investing-during-a-time-of-crisis',
    tagHref: 'https://meansandmatters.bankofthewest.com/category/living'
  },
  {
    type: 'standard',
    tag: 'Economic Outlook',
    heading: 'Pandemic Woes Lead to Fiscal Spending Hopes',
    subtext: '1 minute read',
    image: prefixImagePath({
      src: '/wealth/BOTW_Wealth_Articles_Pandemic.png'
    }),
    href: 'https://changematters.bankofthewest.com/category/economicoutlook',
    tagHref: 'https://changematters.bankofthewest.com/category/economicoutlook'
  },
  {
    type: 'video',
    heading: 'Investing in the time of COVID-19',
    subtext: '1 minute read',
    src: 'https://youtu.be/Me-eyi28aFo',
    poster: prefixImagePath({
      src: '/wealth/BOTW_Wealth_Articles_Investing.png'
    }),
    posterAlt: 'Investing in the time of COVID-19'
  },
  {
    type: 'text-only',
    heading: 'Discover Additional Resources',
    href:
      'https://www.bankofthewest.com/wealth-management/insights/market-commentary'
  }
]

const CarouselPartial = () => <CardCarousel items={items} />

export default CarouselPartial
