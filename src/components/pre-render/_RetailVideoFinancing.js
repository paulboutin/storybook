import React from 'react'
import PopupVideo from '../layout/PopupVideo'
import { prefixImagePath } from '../../utils'

const title = 'What on Earth is Your Bank Financing?'

const RetailVideoPartial = () => {
  return (
    <PopupVideo
      eyebrowEnable
      eyebrow='MEANS & MATTERS'
      poster={prefixImagePath({
        src: '/retail/BOTW_Retail_Video-Financing.png'
      })}
      posterAlt={title}
      src='https://vimeo.com/516870835'
      title={title}
    />
  )
}

export default RetailVideoPartial
