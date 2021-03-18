import React from 'react'
import Affiliates from '../layout/Affiliates'
import * as config from '../../config'
import { prefixImagePath } from '../../utils'

const images = prefix => [
  {
    alt: '1% For The Planet',
    src: prefixImagePath({
      prefix,
      src: '/retail/logos/BOTW_Retail_Affiliate_1Percent-for-the-planet.png'
    })
  },
  {
    alt: 'The Conservation Alliance',
    src: prefixImagePath({
      prefix,
      src: '/retail/logos/BOTW_Retail_Affiliate_TCA.png'
    })
  },
  {
    alt: 'Protect Our Winters',
    src: prefixImagePath({
      prefix,
      src: '/retail/logos/BOTW_Retail_Affiliate_POW.png'
    })
  },
  {
    alt: 'Sustainable Ocean Alliance',
    src: prefixImagePath({
      prefix,
      src: '/retail/logos/BOTW_Retail_Affiliate_SOA.png'
    })
  }
]

const RetailAffiliatePartial = ({ imgPath = config.PRERENDER_IMAGE_PATH }) => {
  return (
    <Affiliates
      headline='We are the first major bank to be a member of:'
      images={images(imgPath)}
    />
  )
}

export default RetailAffiliatePartial
