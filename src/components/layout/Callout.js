import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'

const Callout = ({ eyebrow = {}, title, text, className, children }) => (
  <div className={classNames('callout container', className)}>
    {eyebrow.enable && <Eyebrow>{eyebrow.text}</Eyebrow>}
    <h1 className='callout-title' dangerouslySetInnerHTML={{ __html: title }} />
    {text && (
      <p className='callout-text' dangerouslySetInnerHTML={{ __html: text }} />
    )}
    {children && <div className='callout-content'>{children}</div>}
  </div>
)

export default Callout
