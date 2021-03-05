import React from 'react'
import PopupVideo from '../layout/PopupVideo'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'

const title = 'Scale Faster with TreasuryNow'

const CommercialVideoPartial = ({ imgPath = config.PRERENDER_IMAGE_PATH }) => {
  return (
    <PopupVideo
      eyebrowEnable
      eyebrow='LATEST STORIES'
      poster={prefixImagePath({
        prefix: imgPath,
        src: '/commercial/BOTW_Commercial_Video_TreasuryNow.png'
      })}
      posterAlt={title}
      src='https://vimeo.com/516873221'
      title={title}
    />
  )
}

export default CommercialVideoPartial
