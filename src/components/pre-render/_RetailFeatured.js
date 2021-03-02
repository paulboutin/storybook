import React from 'react'
import Affiliates from '../layout/Affiliates'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'

const images = prefix => [
  {
    alt: 'Fast Company',
    src: prefixImagePath({
      prefix,
      src: '/retail/logos/BOTW_Retail_Featured_FastCompany.png'
    })
  },
  {
    alt: 'Human Rights Campaign',
    src: prefixImagePath({
      prefix,
      src: '/retail/logos/BOTW_Retail_Featured_HRC.png'
    })
  },
  {
    alt: 'World Finance',
    src: prefixImagePath({
      prefix,
      src: '/retail/logos/BOTW_Retail_Featured_WorldFinance.png'
    })
  },
  {
    alt: 'Forbes',
    src: prefixImagePath({
      prefix,
      src: '/retail/logos/BOTW_Retail_Featured_Forbes.png'
    })
  }
]

const RetailFeaturedPartial = ({ imgPath = config.PRERENDER_IMAGE_PATH }) => {
  return <Affiliates headline='As featured in:' images={images(imgPath)} />
}

export default RetailFeaturedPartial
