import React from 'react'
import Link from './Link'

const Breadcrumbs = ({ items }) => (
  <div className='breadcrumbs'>
    {items.map((item, index) => {
      if (index < items.length - 1) {
        return (
          <React.Fragment key={index}>
            <Link>{item}</Link>
            <i className='icon icon-chevron-right' />
          </React.Fragment>
        )
      } else {
        return <span key={index}>{item}</span>
      }
    })}
  </div>
)

export default Breadcrumbs
