import React from 'react'
import Link from './Link'

const Breadcrumbs = ({ items }) => (
  <div className='breadcrumbs'>
    {items.map((item, index) => {
      if (index < items.length - 1) {
        return (
          <>
            <Link>{item}</Link>
            <i className='icon icon-chevron-right' />
          </>
        )
      } else {
        return <span>{item}</span>
      }
    })}
  </div>
)

export default Breadcrumbs
