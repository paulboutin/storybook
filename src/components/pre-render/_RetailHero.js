import React from 'react'
import Button from '../base/Button'
import Highlight from '../layout/Highlight'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'

const title = 'Not all checking accounts are created equal'
const text =
  'This one gives back to the planet, at no cost to you. It’s $0/month and no minimum balance.'

const RetailHeroPartial = ({ imgPath = config.PRERENDER_IMAGE_PATH }) => {
  return (
    <Highlight
      className='centered'
      type='B'
      title={title}
      text={text}
      image={prefixImagePath({
        prefix: imgPath,
        src: '/retail/BOTW_Retail_Hero_BlueBird.png'
      })}
    >
      <Button
        type='primary'
        link
        href='https://www.bankofthewest.com/personal-banking/checking-accounts'
        label='Apply Now'
      />
    </Highlight>
  )
}

export default RetailHeroPartial
