import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'

const Callout = ({ eyebrow = {}, title, text, className }) => (
  <div className={classNames('callout container', className)}>
    {eyebrow.enable && (
      <div className='callout-eyebrow-wrapper'>
        <Eyebrow>{eyebrow.text}</Eyebrow>
      </div>
    )}
    <h1 className='callout-title'>{title}</h1>
    <p className='callout-text'>{text}</p>
  </div>
)

export default Callout
