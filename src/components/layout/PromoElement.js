import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'
import Image from '../base/Image'

const PromoElement = ({ image, type, eyebrow, heading, text, children }) => (
  <div
    className={classNames('promo-element', {
      'promo-full': type === 'Full',
      'promo-accent': type.includes('Accent'),
      'promo-square': type.includes('Square'),
      'promo-dark': type.includes('Dark'),
      'promo-element-starbirds': type !== '' && type !== 'Full'
    })}
  >
    <div className='container'>
      <div className='promo-element-content'>
        <Eyebrow text={eyebrow} inverted={type.includes('Accent')} />
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
            ratio={type.includes('Square') ? '1:1' : 'auto'}
          />
        )}
      </div>
      {type.includes('Accent') && !type.includes('Dark') && (
        <div className='cta-wrapper'>{children}</div>
      )}
    </div>
  </div>
)

export default PromoElement
