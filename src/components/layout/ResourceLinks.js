import React from 'react'
import Eyebrow from '../base/Eyebrow'
import Link from '../base/Link'

export const defaultEyebrow = 'Resources'
export const defaultTitle = 'Useful links'
export const defaultText =
  'Bank of the West has the strongest environment stance of any major bank.'

const ResourceLinks = ({ eyebrow = {}, title, text }) => (
  <section className='resource-links container'>
    <div className='row'>
      <div className='col-xs-12 col-sm-6 col-md-4'>
        {eyebrow.enable && <Eyebrow>{eyebrow.text}</Eyebrow>}
        <h2
          className='resource-links-title'
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {text && (
          <p
            className='resource-links-text'
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )}
      </div>

      <div className='col-xs-12 col-sm-5 col-sm-offset-1 col-md-7'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <Link href='#'>Savings & Money Markets</Link>
            <Link href='#'>Business CDs</Link>
            <Link href='#'>Account Services</Link>
            <Link href='#'>Payroll Services</Link>
          </div>

          <div className='col-xs-12 col-md-6'>
            <Link href='#'>Savings & Money Markets</Link>
            <Link href='#'>Business CDs</Link>
            <Link href='#'>Account Services</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ResourceLinks
