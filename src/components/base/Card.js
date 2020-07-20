import React from 'react'
import Link from './Link'
import classNames from 'classnames'

const Card = ({ heading, children, linkText, imageSrc, imageAlt, flat }) => {
  return (
    <div className={classNames('card', flat ? 'flat' : '')}>
      <img className='card-img' src={imageSrc} alt={imageAlt} />
      <div className='card-content'>
        <h4 className='card-heading'>{heading}</h4>
        <div className='card-text-wrapper'>
          <p className='card-text'>{children}</p>
        </div>
        <Link icon='long-arrow-alt-right'>{linkText}</Link>
      </div>
    </div>
  )
}

export default Card
