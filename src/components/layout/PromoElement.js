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
        <h3 className='promo-element-heading'>{heading}</h3>
        <p className='promo-element-text'>{text}</p>
        <div className='cta-wrapper'>{children}</div>
      </div>
      <div className='promo-element-image-wrapper'>
        {image && (
          <Image
            className='image-block'
            alt={image.alt}
            src={image.src}
            ratio={type.includes('square') ? '1:1' : 'auto'}
          />
        )}
        {type !== '' && type !== 'full' && <StarBirds />}
      </div>
      {type.includes('accent') && !type.includes('dark') && (
        <div className='cta-wrapper'>{children}</div>
      )}
    </div>
  </div>
)

export default PromoElement
