import React from 'react'
import ResourceLinksImage from '../layout/ResourceLinksImage'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'

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

const ResourceLinksPartial = ({ imgPath = config.PRERENDER_IMAGE_PATH }) => (
  <ResourceLinksImage
    type='A'
    headline='We implement solutions that evolve with your business and help you gain a competitive edge.'
    image={prefixImagePath({
      prefix: imgPath,
      src: '/commercial/BOTW_Commercial_Solutions_City-view.jpg'
    })}
    items={items}
  />
)

export default ResourceLinksPartial
