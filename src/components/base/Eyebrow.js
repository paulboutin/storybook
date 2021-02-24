import React from 'react'
import classNames from 'classnames'

const Eyebrow = ({ children, className }) => (
  <p className={classNames('eyebrow', className)}>{children}</p>
)

export default Eyebrow
