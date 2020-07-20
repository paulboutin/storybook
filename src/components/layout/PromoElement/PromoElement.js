import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../../base/Eyebrow'
import PromoElementImage from './PromoElementImage'

const PromoElement = ({ type, eyebrow, heading, text, children }) => (
  <div className={classNames('promo-element', type)}>
    <div className='container'>
      <div className='promo-element-content'>
        <Eyebrow text={eyebrow} inverted={type === 'accent'} />
        <h2 className='promo-element-heading'>{heading}</h2>
        <p className='promo-element-text'>{text}</p>
        <div className='cta-wrapper'>{children}</div>
      </div>
      <PromoElementImage src='http://via.placeholder.com/1600' alt='Hero' />
      {type === 'accent' && <div className='cta-wrapper'>{children}</div>}
    </div>
  </div>
)

export default PromoElement
