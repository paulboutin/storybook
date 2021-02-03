import React from 'react'
import classNames from 'classnames'

const Eyebrow = ({ children, className }) => (
  <h6 className={classNames('eyebrow', className)}>{children}</h6>
)

export default Eyebrow
