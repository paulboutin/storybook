import React from 'react'
import classNames from 'classnames'
import LongArrowRight from '../../svg/long-arrow-right.svg'

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
    {standalone && <LongArrowRight />}
  </a>
)

export default Link
