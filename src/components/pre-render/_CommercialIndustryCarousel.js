import React from 'react'
import Callout from '../layout/Callout'
import CardCarousel from '../layout/CardCarousel'
import { prefixImagePath } from '../../utils'

const items = [
  {
    type: 'services-icon',
    heading: 'Technology',
    image: prefixImagePath({
      src: '/commercial/BOTW_Commercial_industries_Technology.png'
    }),
    href: 'https://www.bankofthewest.com/commercial-banking/industry/technology'
  },
  {
    type: 'services-icon',
    heading: 'Healthcare',
    image: prefixImagePath({
      src: '/commercial/BOTW_Commercial_industries_Healthcare.png'
    }),
    href: 'https://www.bankofthewest.com/commercial-banking/industry/healthcare'
  },
  {
    type: 'services-icon',
    heading: 'Food and Agribusiness',
    image: prefixImagePath({
      src: '/commercial/BOTW_Commercial_industries_Food.png'
    }),
    href:
      'https://www.bankofthewest.com/commercial-banking/industry/agribusiness-farming'
  },
  {
    type: 'services-icon',
    heading: 'Wine and Beverage',
    image: prefixImagePath({
      src: '/commercial/BOTW_Commercial_industries_Wine.png'
    }),
    href:
      'https://www.bankofthewest.com/commercial-banking/industry/beverage-industry'
  },
  {
    type: 'services-icon',
    heading: 'Title and Escrow',
    image: prefixImagePath({
      src: '/commercial/BOTW_Commercial_industries_Title.png'
    }),
    href:
      'https://www.bankofthewest.com/commercial-banking/industry/title-escrow-banking'
  },
  {
    type: 'services-icon',
    heading: 'Commercial Real Estate',
    image: prefixImagePath({
      src: '/commercial/BOTW_Commercial_industries_Commercial.png'
    }),
    href:
      'https://www.bankofthewest.com/commercial-banking/industry/real-estate'
  },
  {
    type: 'services-icon',
    heading: 'Government & Public Sector',
    image: prefixImagePath({
      src: '/commercial/BOTW_Commercial_industries_Government.png'
    }),
    href:
      'https://www.bankofthewest.com/commercial-banking/industry/government-banking-public-finance'
  },
  {
    type: 'services-icon',
    heading: 'Religious Institutions',
    image: prefixImagePath({
      src: '/commercial/BOTW_Commercial_industries_Religious.png'
    }),
    href:
      'https://www.bankofthewest.com/commercial-banking/industry/religious-institution-banking'
  },
  {
    type: 'services-icon',
    heading: 'Environmental, Social, and Governance',
    image: prefixImagePath({
      src: '/commercial/BOTW_Commercial_industries_Environmental.png'
    }),
    href: ''
  }
]

const CarouselPartial = () => (
  <>
    <Callout
      title='There’s more to your business than just business'
      text='Work with an expert who has deep market expertise, specific to your industry.'
    />
    <CardCarousel items={items} />
  </>
)

export default CarouselPartial
