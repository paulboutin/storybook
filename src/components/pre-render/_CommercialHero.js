import React from 'react'
import Button from '../base/Button'
import Highlight from '../layout/Highlight'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'

const title = 'Industry expertise, delivered globally'
const text =
  'As part of BNP Paribas, we have local industry experts in 72 countries, and align strategy with sustainability.'

const CommercialHeroPartial = ({ imgPath = config.PRERENDER_IMAGE_PATH }) => {
  return (
    <Highlight
      className='centered'
      type='A'
      title={title}
      text={text}
      image={prefixImagePath({
        prefix: imgPath,
        src: '/commercial/BOTW_Commercial_Hero_Coffee.png'
      })}
    >
      <div className='flex-content'>
        <Button
          type='primary'
          link
          href='https://www.bankofthewest.com/commercial-banking/contact-form'
          label='Connect with Us'
        />
      </div>
    </Highlight>
  )
}

export default CommercialHeroPartial
