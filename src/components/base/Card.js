import React from 'react'
import classNames from 'classnames'
import Image from './Image'
import Link from './Link'

export const defaultItems = [
  {
    heading: 'Personal Checking',
    text:
      'Convenience, flexibility and value for your day to day banking needs.'
  },
  {
    heading: 'Savings Accounts',
    text: 'We can help put extra funds to work earning interest.'
  },
  {
    heading: 'Credit Cards',
    text: 'Discover credit cards that can help you manage your cash flow.'
  },
  {
    heading: 'Loans and Mortgages',
    text: 'We offer loans, financing, and flexible financing lines of credit.'
  },
  {
    heading: 'Personal Investing',
    text: 'Invest in the future you want, the way you want.'
  }
]

const Card = ({ heading, children, linkText, image, flat }) => {
  return (
    <article className={classNames('card', { 'card-flat': flat })}>
      <Image
        className='image-block'
        src={image.src}
        alt={image.alt}
        ratio={flat ? '4:3' : '1:1'}
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
