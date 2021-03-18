import React from 'react'
import Button from '../base/Button'
import ClosingCTACarousel from '../layout/ClosingCTACarousel'
import Link from '../base/Link'
import * as config from '../../config'
import { prefixImagePath } from '../../utils'

const items = prefix => [
  {
    image: prefixImagePath({
      prefix,
      src: '/retail/BOTW_Retail_Closing-CTA_Seabird.jpg'
    }),
    title: '70%',
    text: 'of seabirds are contaminated with cigarette butt waste.'
  },
  {
    image: prefixImagePath({
      prefix,
      src: '/retail/BOTW_Retail_Closing-CTA_Fossil-fuel.jpg'
    }),
    title: '30%',
    text: 'of global fossil fuel expansion is funded by the top 4 U.S. banks.'
  },
  {
    image: prefixImagePath({
      prefix,
      src: '/retail/BOTW_Retail_Closing-CTA_Factory.jpg'
    }),
    title: '$202',
    text:
      'billion is spent on fossil fuel funding on average by the largest U.S. banks.'
  }
]

const RetailClosingCTAPartial = ({ imgPath = config.PRERENDER_IMAGE_PATH }) => (
  <ClosingCTACarousel
    headline='Stop the cycle. Bank with us'
    items={items(imgPath)}
  >
    <Button
      link
      href='https://www.bankofthewest.com/personal-banking/checking-accounts'
      type='secondary'
      label='Open an Account'
    />
    <Link href='https://www.bankofthewest.com/campaigns/personal-banking/change-matters'>
      Learn about our impact
    </Link>
  </ClosingCTACarousel>
)

export default RetailClosingCTAPartial
