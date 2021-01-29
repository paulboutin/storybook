import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'

const Callout = ({ eyebrow = {}, title, text, className }) => (
  <div className={classNames('callout container', className)}>
    {eyebrow.enable && <Eyebrow>{eyebrow.text}</Eyebrow>}
    <h1 className='callout-title'>{title}</h1>
    <p className='callout-text'>{text}</p>
  </div>
)

export default Callout
