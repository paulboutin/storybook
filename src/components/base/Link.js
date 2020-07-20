import React from 'react'
import classNames from 'classnames'

const Link = ({ href = '#', icon, className, children }) => (
  <a
    href={href}
    className={classNames(
      'link',
      icon ? 'link-standalone' : 'link-inline',
      className
    )}
  >
    {children}
    {icon && <span className={`fa fa-${icon}`} />}
  </a>
)

export default Link
