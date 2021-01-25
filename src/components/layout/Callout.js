import React from 'react'
import classNames from 'classnames'

const Callout = ({ title, text, className }) => (
  <div className={classNames('callout container', className)}>
    <h1 className='callout-title'>{title}</h1>
    <p className='callout-text'>{text}</p>
  </div>
)

export default Callout
