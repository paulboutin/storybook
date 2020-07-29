import React from 'react'
import classNames from 'classnames'

const ClosingCTA = ({ type, image, heading, text, children }) => (
  <div
    className={classNames('closing-cta', `closing-cta-${type}`, {
      'closing-cta-starbirds': type !== ''
    })}
  >
    <div className='container'>
      <div className='closing-cta-image-wrapper'>
        {type !== 'alt' && (
          <img src={image} alt='CTA image' className='closing-cta-image' />
        )}
      </div>
      <div className='closing-cta-content'>
        <h2 className='closing-cta-heading'>{heading}</h2>
        {type !== 'half' && text && <p className='closing-cta-text'>{text}</p>}
        {children}
      </div>
    </div>
  </div>
)

export default ClosingCTA
