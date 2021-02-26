import React from 'react'
import PopupVideo from '../layout/PopupVideo'
import { prefixImagePath } from '../../utils'

const title = 'Scale Faster with TreasuryNow'

const RetailVideoPartial = () => {
  return (
    <PopupVideo
      eyebrowEnable
      eyebrow='LATEST STORIES'
      poster={prefixImagePath({
        src: '/commercial/BOTW_Commercial_Video_TreasuryNow.png'
      })}
      posterAlt={title}
      src='https://vimeo.com/516873221'
      title={title}
    />
  )
}

export default RetailVideoPartial
