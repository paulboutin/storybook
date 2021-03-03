import React from 'react'
import { ClosingCTA } from '../layout/ClosingCTA'
import Button from '../base/Button'
import Link from '../base/Link'

const WealthClosingCTAPartial = () => {
  return (
    <ClosingCTA
      type='standard'
      className='closing-cta-white'
      title='Call an advisor today'
    >
      <div className='flex-content centered'>
        <Button
          type='primary'
          link
          href='https://www.bankofthewest.com/alpha2/Wealth-Management/find-an-advisor'
          label='Find your advisor'
        />
        <Link href='tel:1-800-435-1912'>1-800-435-1912</Link>
        <Link href='tel:1-800-659-5495'>TTY:1-800-659-5495</Link>
        <p>24/7 Exclusive Assistance</p>
      </div>
    </ClosingCTA>
  )
}

export default WealthClosingCTAPartial
