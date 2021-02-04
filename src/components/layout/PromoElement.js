import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'
import Image from '../base/Image'

const AccentGreenImage = ({ alt, src }) => {
  return (
    <Image
      className='image-block sm:ratio-4:3'
      alt={alt}
      src={src}
      ratio='1:1'
    />
  )
}

const AccentDarkImage = ({ alt, src }) => {
  return <Image className='image-block' alt={alt} src={src} ratio='3:4' />
}

const PromoElement = ({
  type,
  image,
  eyebrow = {},
  heading,
  text,
  starBirds,
  children
}) => {
  const ImageBlock = () => {
    switch (type) {
      case 'accent green':
        return <AccentGreenImage alt={image.alt} src={image.src} />
      default:
        return <AccentDarkImage alt={image.alt} src={image.src} />
    }
  }

  return (
    <section
      className={classNames('promo-element', {
        'promo-alt': type === 'alt',
        'promo-accent': type.includes('accent'),
        'promo-green': type.includes('green'),
        'promo-dark': type.includes('dark'),
        'promo-element-starbirds': starBirds
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
          {image && <ImageBlock />}
        </div>
        {type.includes('accent') && !type.includes('dark') && (
          <div className='cta-wrapper'>{children}</div>
        )}
      </div>
    </section>
  )
}

export default PromoElement
