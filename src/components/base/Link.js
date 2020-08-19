import React from 'react'
import classNames from 'classnames'

const Link = ({ href = '#', standalone, className, children }) => (
  <a
    href={href}
    className={classNames(
      'link',
      standalone ? 'link-standalone' : 'link-inline',
      className
    )}
  >
    {children}
    {standalone && <i className='icon icon-long-arrow-right' />}
  </a>
)

export default Link
