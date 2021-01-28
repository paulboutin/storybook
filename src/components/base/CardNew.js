import React from 'react'
import classNames from 'classnames'
import Image from './Image'
import Link from './Link'

const CardNew = ({ heading, children, linkText, image }) => {
  return (
    <article className={classNames('card-new')}>
      <Image className='image-block' src={image.src} alt={image.alt} />
      <div className='card-content'>
        <h5 className='card-heading'>{heading}</h5>
        <div className='card-text-wrapper'>
          <p className='card-text'>{children}</p>
        </div>
        <Link standalone>{linkText}</Link>
      </div>
    </article>
  )
}

export default CardNew
