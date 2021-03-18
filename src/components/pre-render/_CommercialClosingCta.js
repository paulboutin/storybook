import React from 'react'
import { ClosingCTA } from '../layout/ClosingCTA'
import Button from '../base/Button'

const CommercialClosingCTAPartial = () => {
  return (
    <ClosingCTA
      type='standard'
      className='closing-cta-white'
      title='Connect with a Relationship Manager'
    >
      <div className='flex-content centered'>
        <Button
          type='primary'
          link
          href='https://www.bankofthewest.com/commercial-banking/contact-form'
          label='Connect with Us'
        />
      </div>
    </ClosingCTA>
  )
}

export default CommercialClosingCTAPartial
