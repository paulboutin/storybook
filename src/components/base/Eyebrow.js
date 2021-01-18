import React from 'react'
import classNames from 'classnames'

const Eyebrow = ({ children, noUnderline }) => (
  <h6 className={classNames('eyebrow', { 'no-underline': noUnderline })}>
    {children}
  </h6>
)

export default Eyebrow
