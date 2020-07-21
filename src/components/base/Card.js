import React from 'react'
import classNames from 'classnames'
import Image from './Image'
import Link from './Link'

const Card = ({ heading, children, linkText, image, flat }) => {
  return (
    <div className={classNames('card', flat ? 'flat' : '')}>
      <Image src={image.src} alt={image.alt} ratio={flat ? '4:3' : '1:1'} />
      <div className='card-content'>
        <h4 className='card-heading'>{heading}</h4>
        <div className='card-text-wrapper'>
          <p className='card-text'>{children}</p>
        </div>
        <Link standalone>{linkText}</Link>
      </div>
    </div>
  )
}

export default Card
