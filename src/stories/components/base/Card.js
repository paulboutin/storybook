import React from 'react'
import { text } from '@storybook/addon-knobs'
import { Link } from './Link'

const defaultHeading = 'How to pick a checking account'
const defaultText = 'We will help you to decide what is best for you'
const defaultPlaceholder = 'http://via.placeholder.com/500'

export const Card = ({ heading, text, href, imageSrc, imageAlt }) => {
  return (
    <div className='card'>
      <img className='card-img' src={imageSrc} alt={imageAlt} />
      <div className='card-content'>
        <h4 className='card-heading'>{heading}</h4>
        <div className='card-text-wrapper'>
          <p className='card-text'>{text}</p>
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

  return (
    <Card
      heading={heading}
      text={cardText}
      imageSrc={placeholder}
      imageAlt='Image'
    />
  )
}

CardStory.story = {
  name: 'Card'
}
