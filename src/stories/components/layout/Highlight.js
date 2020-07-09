import React from 'react'
import { Eyebrow } from '../base/Eyebrow'
import { Link } from '../base/Link'

export const Highlight = () => {
  return (
    <div className='highlight'>
      <div className='highlight-img-container'></div>

      <div className='highlight-content-container'>
        <Eyebrow text='Sustainable banking' />
        <h4>Bank for the planet</h4>

        <p className='highlight-text'>
          Bank of the West has the strongest environment stance of any major
          bank. Our policies are 100% transparent because we're proud of what we
          finance and what we don't.
        </p>

        <Link href='#' icon='long-arrow-alt-right' className='highlight-link'>
          Learn why your choice of bank matters
        </Link>
      </div>
    </div>
  )
}
