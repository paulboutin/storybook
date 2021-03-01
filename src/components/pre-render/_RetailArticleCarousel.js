import React from 'react'
import CardCarousel from '../layout/CardCarousel'
import { prefixImagePath } from '../../utils'

const items = [
  {
    type: 'standard',
    tag: 'Living',
    heading: 'What Banks Do with Your Money and Why It Matters',
    subtext: '2 minutes read',
    image: prefixImagePath({
      src: '/retail/BOTW_Retail_Articles_Why-it -matters.jpg'
    }),
    href:
      'https://meansandmatters.bankofthewest.com/article/living/what-banks-do-with-your-money-and-why-it-matters',
    tagHref: 'https://meansandmatters.bankofthewest.com/category/living'
  },
  {
    type: 'standard',
    tag: 'Living',
    heading: 'Ways to Offset Your Carbon Footprint',
    subtext: '2 minutes read',
    image: prefixImagePath({
      src: '/retail/BOTW_Retail_Articles_Carbon-footprint.jpg'
    }),
    href:
      'https://meansandmatters.bankofthewest.com/article/living/ways-to-offset-your-carbon-footprint',
    tagHref: 'https://meansandmatters.bankofthewest.com/category/living'
  },
  {
    type: 'standard',
    tag: 'Living',
    heading: 'Women Take the Lead in Impact Investing',
    subtext: '1 minute read',
    image: prefixImagePath({
      src: '/retail/BOTW_Retail_Articles_Women-lead.png'
    }),
    href:
      'https://meansandmatters.bankofthewest.com/article/living/women-take-the-lead-in-impact-investing',
    tagHref: 'https://meansandmatters.bankofthewest.com/category/living'
  },
  {
    type: 'standard',
    tag: 'Inspiration',
    heading: 'This Is the Decade to Reverse Climate Change',
    subtext: '1 minute read',
    image: prefixImagePath({
      src: '/retail/BOTW_Retail_Articles_Climate-change.jpg'
    }),
    href:
      'https://meansandmatters.bankofthewest.com/article/inspiration/decade-to-reverse-climate-change',
    tagHref: 'https://meansandmatters.bankofthewest.com/category/inspiration'
  },
  {
    type: 'text-only',
    heading: 'Discover Additional Resources',
    href: 'https://meansandmatters.bankofthewest.com'
  }
]

const CarouselPartial = () => <CardCarousel items={items} />

export default CarouselPartial
