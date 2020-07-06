import React from 'react'

const heading = 'How to pick a checking account'
const text = 'We will help you to decide what is best for you'
const placeholder = 'http://via.placeholder.com/500'

export const Card = ({ heading, text, link, imageSrc, imageAlt }) => {
  return (
    <div className='card'>
      <img className='card-img' src={imageSrc} alt={imageAlt} />
      <div className='card-content'>
        <h4 className='card-heading'>{heading}</h4>
        <div className='card-text-wrapper'>
          <p className='card-text'>{text}</p>
        </div>
        <a className='card-link' href={link}>
          Read more &#10230;
        </a>
      </div>
    </div>
  )
}

export const CardStory = () => (
  <div className='sm:max-w-xs'>
    <Card
      heading={heading}
      text={text}
      imageSrc={placeholder}
      imageAlt='Image'
    />
  </div>
)

CardStory.story = {
  name: 'Card'
}
