import React from 'react'
import classNames from 'classnames'
import Image from './Image'
import Link from './Link'

export const defaultItems = [
  {
    heading: 'Lorem Ipsum Header',
    text: 'Lorem Ipsum is simply random.'
  }
]

const Card = ({ heading, children, linkText, image, className }) => {
  return (
    <article className={classNames('card', className)}>
      <Image
        className='image-block'
        src={image.src}
        alt={image.alt}
        ratio='4:3'
      />
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

export default Card
