import React from 'react'
import ResourceLinksImage from '../layout/ResourceLinksImage'
import { prefixImagePath } from '../../utils'

const items = [
  {
    text: 'Funding Growth',
    href: ''
  },
  {
    text: 'Managing Risk',
    href:
      'https://www.bankofthewest.com/commercial-banking/solutions/risk-management'
  },
  {
    text: 'Operating Efficiently',
    href: ''
  },
  {
    text: 'Raising Capital',
    href: ''
  },
  {
    text: 'Doing Business Internationally',
    href:
      'https://www.bankofthewest.com/commercial-banking/international/global-trade-solutions'
  },
  {
    text: 'Managing Personal Wealth',
    href: ''
  }
]

const ResourceLinksPartial = () => (
  <ResourceLinksImage
    headline='We implement solutions that evolve with your business and help you gain a competitive edge.'
    image={prefixImagePath({
      src: '/commercial/BOTW_Commercial_Solutions_City view.jpg'
    })}
    items={items}
  />
)

export default ResourceLinksPartial
