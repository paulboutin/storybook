import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'

const PromoElementImage = ({ image }) => (
  <div className='promo-element-img-wrapper'>
    <img className='promo-element-img' src={image.src} alt={image.alt} />
  </div>
)

const PromoElement = ({ image, type, eyebrow, heading, text, children }) => (
  <div className={classNames('promo-element', type)}>
    <div className='container'>
      <div className='promo-element-content'>
        <Eyebrow text={eyebrow} inverted={type === 'accent'} />
        <h2 className='promo-element-heading'>{heading}</h2>
        <p className='promo-element-text'>{text}</p>
        <div className='cta-wrapper'>{children}</div>
      </div>
      {image && <PromoElementImage image={image} />}
      {type === 'accent' && <div className='cta-wrapper'>{children}</div>}
    </div>
  </div>
)

export default PromoElement
