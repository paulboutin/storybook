import classNames from 'classnames'
import React from 'react'

const ClosingCTA = ({ type, image, heading, text, children }) => (
  <div className={classNames('closing-cta', type)}>
    <div className='container'>
      <img src={image} alt='CTA image' className='closing-cta-img' />
      <div className='closing-cta-content'>
        <h2 className='closing-cta-heading'>{heading}</h2>
        {type !== 'Half' && text && <p className='closing-cta-text'>{text}</p>}
        {children}
      </div>
    </div>
  </div>
)

export default ClosingCTA
