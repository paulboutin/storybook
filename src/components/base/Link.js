import React from 'react'
import classNames from 'classnames'

const Link = ({
  href = '#',
  standalone,
  noArrow = false,
  className,
  children
}) => (
  <a
    href={href}
    className={classNames(
      'link',
      standalone ? 'link-standalone' : 'link-inline',
      className
    )}
  >
    {children}
    {standalone && !noArrow && <i className='icon icon-long-arrow-right' />}
  </a>
)

export default Link
