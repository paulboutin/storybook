import React from 'react'
import classNames from 'classnames'
import Card from '../../../components/base/Card'
import { text } from '@storybook/addon-knobs'

const defaultHeading = 'How to pick a checking account'
const defaultText = 'We will help you to decide what is best for you'
const defaultLinkText = 'Read more'
const defaultPlaceholder = 'http://via.placeholder.com/640x480'

export const CardStory = ({ type, className }) => {
  const heading = text('Heading', defaultHeading)
  const cardText = text('Text', defaultText)
  const linkText = text('Link text', defaultLinkText)
  const placeholder = text('Placeholder', defaultPlaceholder)

  return (
    <div className={classNames('sb:card', `sb:card-${type}`)}>
      <Card
        heading={heading}
        linkText={linkText}
        image={{ src: placeholder, alt: 'Image' }}
        className={className}
      >
        {cardText}
      </Card>
    </div>
  )
}
