import React from 'react'
import Eyebrow from '../base/Eyebrow'
import Link from '../base/Link'

const HelpfulLinks = () => (
  <div className='helpful-links container'>
    <div className='row'>
      <div className='col-xs-12 col-sm-6 col-md-4'>
        <Eyebrow text='Resources' />
        <h2 className='helpful-links-title'>Useful links</h2>
        <p className='helpful-links-text'>
          Bank of the West has the strongest environment stance of any major
          bank.
        </p>
      </div>

      <div className='col-xs-12 col-sm-5 col-sm-offset-1 col-md-7'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <div>
              <Link href='#'>Savings & Money Markets</Link>
            </div>
            <div>
              <Link href='#'>Business CDs</Link>
            </div>
            <div>
              <Link href='#'>Account Services</Link>
            </div>
            <div>
              <Link href='#'>Payroll Services</Link>
            </div>
          </div>

          <div className='col-xs-12 col-md-6'>
            <div>
              <Link href='#'>Savings & Money Markets</Link>
            </div>
            <div>
              <Link href='#'>Business CDs</Link>
            </div>
            <div>
              <Link href='#'>Account Services</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HelpfulLinks
