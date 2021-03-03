import React from 'react'
import AppCTA from '../base/AppCTA'
import Highlight from '../layout/Highlight'
import Link from '../base/Link'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'

const RetailAppHighlightPartial = ({
  imgPath = config.PRERENDER_IMAGE_PATH
}) => {
  return (
    <Highlight
      reverse
      type='B'
      title='In person, or on the phone'
      text='U.S. based customer service, and over 600 branch locations for your convenience.'
      eyebrow={{
        enable: true,
        text: 'CONTACT US'
      }}
      image={prefixImagePath({
        prefix: imgPath,
        src: '/retail/BOTW_Retail_Branches.jpg'
      })}
    >
      <Link
        href='https://www.bankofthewest.com/customer-service/branch-results'
        standalone
      >
        Find a branch near you
      </Link>
    </Highlight>
  )
}

export default RetailAppHighlightPartial
