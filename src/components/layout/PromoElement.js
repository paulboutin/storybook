import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'
import Image from '../base/Image'

const PromoElement = ({ image, type, eyebrow, heading, text, children }) => (
  <div className={classNames('promo-element', type)}>
    <div className='container'>
      <div className='promo-element-content'>
        <Eyebrow text={eyebrow} inverted={type.includes('accent')} />
        <h2 className='promo-element-heading'>{heading}</h2>
        <p className='promo-element-text'>{text}</p>
        <div className='cta-wrapper'>{children}</div>
      </div>
      {image && <Image alt={image.alt} src={image.src} ratio='4:3' />}
      {type.includes('accent') &&
        !type.includes('full') &&
        !type.includes('dark') && <div className='cta-wrapper'>{children}</div>}
    </div>
  </div>
)

export default PromoElement
