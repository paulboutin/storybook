import React from 'react'
import Button from '../base/Button'
import Highlight from '../layout/Highlight'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'

const title = 'The Debit Card that Gives Back'
const text =
  'We’ll give 1% of our account net revenue back to the planet. You pay $0/month with no minimum balance.'

const RetailHeroPartial = ({ imgPath = config.PRERENDER_IMAGE_PATH }) => {
  return (
    <Highlight
      type='A'
      title={title}
      text={text}
      image={prefixImagePath({
        prefix: imgPath,
        src: '/retail/BOTW_Retail_Hero_BlueBird.png'
      })}
    >
      <Button
        link
        href='https://www.bankofthewest.com/personal-banking/checking-accounts'
      >
        Open An Account
      </Button>
    </Highlight>
  )
}

export default RetailHeroPartial
