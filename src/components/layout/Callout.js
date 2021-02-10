import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'

const Callout = ({ eyebrow = {}, title, text, className, children }) => (
  <div className={classNames('callout container', className)}>
    {eyebrow.enable && <Eyebrow>{eyebrow.text}</Eyebrow>}
    <h2
      className='callout-title text-h1'
      dangerouslySetInnerHTML={{ __html: title }}
    />
    {text && (
      <p className='text-h5' dangerouslySetInnerHTML={{ __html: text }} />
    )}
    {children && <div className='callout-content'>{children}</div>}
  </div>
)

export default Callout
