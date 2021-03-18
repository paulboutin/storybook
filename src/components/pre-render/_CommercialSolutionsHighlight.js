import React from 'react'
import Highlight from '../layout/Highlight'
import Link from '../base/Link'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'

const CommercialSolutionsHighlightPartial = ({
  imgPath = config.PRERENDER_IMAGE_PATH
}) => {
  return (
    <Highlight
      className='margins'
      reverse
      type='B'
      title='Scale faster and simplify payments'
      text='TreasuryNow provides you with intelligent business data to help you make more informed decisions, and meet your company’s needs for payables, receivables, and liquidity management.'
      image={prefixImagePath({
        prefix: imgPath,
        src: '/commercial/BOTW_Commercial_TreasuryNow.jpg'
      })}
    >
      <Link href='#' standalone>
        Learn More
      </Link>
    </Highlight>
  )
}

export default CommercialSolutionsHighlightPartial
