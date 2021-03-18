import React from 'react'
import ResourceLinksImage from '../layout/ResourceLinksImage'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'

const items = [
  {
    text: 'Asset-Based Lending',
    href:
      'https://www.bankofthewest.com/commercial-banking/solutions/asset-based-lending'
  },
  {
    text: 'Dealer Financial Services',
    href:
      'https://www.bankofthewest.com/commercial-banking/solutions/dealer-financial-services'
  },
  {
    text: 'Equipment Financing',
    href:
      'https://www.bankofthewest.com/commercial-banking/solutions/equipment-financing'
  },
  {
    text: 'Fraud Prevention',
    href:
      'https://www.bankofthewest.com/commercial-banking/treasury-management/fraud-prevention'
  },
  {
    text: 'Global Trade Solutions',
    href:
      'https://www.bankofthewest.com/commercial-banking/international/global-trade-solutions'
  },
  {
    text: 'Risk Management',
    href:
      'https://www.bankofthewest.com/commercial-banking/solutions/risk-management'
  },
  {
    text: 'Syndicated Loans',
    href:
      'https://www.bankofthewest.com/commercial-banking/solutions/loan-syndications'
  },
  {
    text: 'Treasury Management',
    href: 'https://www.bankofthewest.com/commercial-banking/treasury-management'
  }
]

const CommercialSolutionsLinksPartial = ({
  imgPath = config.PRERENDER_IMAGE_PATH
}) => (
  <ResourceLinksImage
    type='B'
    headline='We implement solutions that evolve with your business and help you gain a competitive edge.'
    image={prefixImagePath({
      prefix: imgPath,
      src: '/commercial/BOTW_Commercial_Solutions_City-view.jpg'
    })}
    items={items}
  />
)

export default CommercialSolutionsLinksPartial
