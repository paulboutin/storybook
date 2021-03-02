import React from 'react'
import AppCTA from '../base/AppCTA'
import Highlight from '../layout/Highlight'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'

const RetailAppHighlightPartial = ({
  imgPath = config.PRERENDER_IMAGE_PATH
}) => {
  return (
    <Highlight
      type='B'
      title='Bank whenever, wherever'
      text='Deposit checks, transfer funds, and manage all of your finances securely, on the go.'
      image={prefixImagePath({
        prefix: imgPath,
        src: '/retail/BOTW_Retail_App.png'
      })}
    >
      <AppCTA />
    </Highlight>
  )
}

export default RetailAppHighlightPartial
