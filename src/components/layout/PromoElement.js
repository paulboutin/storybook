import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'
import Image from '../base/Image'
import StarBirds from '../../svg/star-birds.svg'

const PromoElement = ({ image, type, eyebrow, heading, text, children }) => (
  <div className={classNames('promo-element', type)}>
    <div className='container'>
      <div className='promo-element-content'>
        <Eyebrow text={eyebrow} inverted={type.includes('accent')} />
        <h2 className='promo-element-heading'>{heading}</h2>
        <p className='promo-element-text'>{text}</p>
        <div className='cta-wrapper'>{children}</div>
      </div>
      <div className='promo-element-image-wrapper'>
        {type !== '' && type !== 'full' && <StarBirds />}
        {image && <Image alt={image.alt} src={image.src} ratio='1:1' />}
      </div>
      {type.includes('accent') &&
        !type.includes('full') &&
        !type.includes('dark') && <div className='cta-wrapper'>{children}</div>}
    </div>
  </div>
)

export default PromoElement
