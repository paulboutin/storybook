import React from 'react'
import classNames from 'classnames'
import Card from '../../components/base/Card'
import { radios, text } from '@storybook/addon-knobs'

const defaultHeading = 'How to pick a checking account'
const defaultText = 'We will help you to decide what is best for you'
const defaultLinkText = 'Read more'
const defaultPlaceholder = 'http://via.placeholder.com/500'

export const CardStory = () => {
  const heading = text('Heading', defaultHeading)
  const cardText = text('Text', defaultText)
  const linkText = text('Link text', defaultLinkText)
  const placeholder = text('Placeholder', defaultPlaceholder)
  const type = radios('Type', ['Standard', 'Flat'], 'Standard')

  return (
    <div className={classNames('sb:card', type === 'Flat' && 'flat')}>
      <Card
        heading={heading}
        linkText={linkText}
        image={{ src: placeholder, alt: 'Image' }}
        flat={type === 'Flat'}
      >
        {cardText}
      </Card>
    </div>
  )
}

CardStory.story = {
  name: 'Card'
}

export default {
  title: 'Base Components'
}
