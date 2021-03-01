import React from 'react'
import PopupVideo from '../layout/PopupVideo'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'

const title = 'What on Earth is Your Bank Financing?'

const RetailVideoPartial = ({ imgPath = config.PRERENDER_IMAGE_PATH }) => {
  return (
    <PopupVideo
      eyebrowEnable
      eyebrow='MEANS & MATTERS'
      poster={prefixImagePath({
        prefix: imgPath,
        src: '/retail/BOTW_Retail_Video-Financing.png'
      })}
      posterAlt={title}
      src='https://vimeo.com/516870835'
      title={title}
    />
  )
}

export default RetailVideoPartial
