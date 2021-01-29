import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'
import Image from '../base/Image'

const PromoElement = ({
  type,
  image,
  eyebrow = {},
  heading,
  text,
  children
}) => (
  <section
    className={classNames('promo-element', {
      'promo-alt': type === 'alt',
      'promo-accent': type.includes('accent'),
      'promo-square': type.includes('square'),
      'promo-dark': type.includes('dark'),
      'promo-element-starbirds': type !== '' && type !== 'alt'
    })}
  >
    <div className='container'>
      <div className='promo-element-content'>
        {eyebrow.enable && <Eyebrow>{eyebrow.text}</Eyebrow>}
        <h3
          className='promo-element-heading'
          dangerouslySetInnerHTML={{ __html: heading }}
        />
        {text && (
          <p
            className='promo-element-text'
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )}
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
      </div>
      {type.includes('accent') && !type.includes('dark') && (
        <div className='cta-wrapper'>{children}</div>
      )}
    </div>
  </section>
)

export default PromoElement
