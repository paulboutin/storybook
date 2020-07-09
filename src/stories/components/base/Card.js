import React from 'react'
import classNames from 'classnames'
import { radios, text } from '@storybook/addon-knobs'
import { Link } from './Link'

const defaultHeading = 'How to pick a checking account'
const defaultText = 'We will help you to decide what is best for you'
const defaultPlaceholder = 'http://via.placeholder.com/500'

export const Card = ({ heading, children, href, imageSrc, imageAlt, flat }) => {
  return (
    <div className={classNames('card', flat ? 'flat' : '')}>
      <img className='card-img' src={imageSrc} alt={imageAlt} />
      <div className='card-content'>
        <h4 className='card-heading'>{heading}</h4>
        <div className='card-text-wrapper'>
          <p className='card-text'>{children}</p>
        </div>
        <Link href={href} icon='long-arrow-alt-right'>
          Read more
        </Link>
      </div>
    </div>
  )
}

export const CardStory = () => {
  const heading = text('Heading', defaultHeading)
  const cardText = text('Text', defaultText)
  const placeholder = text('Placeholder', defaultPlaceholder)
  const type = radios('Type', ['Standard', 'Flat'], 'Standard')

  return (
    <Card
      heading={heading}
      imageSrc={placeholder}
      imageAlt='Image'
      flat={type === 'flat'}
    >
      {cardText}
    </Card>
  )
}

CardStory.story = {
  name: 'Card'
}
