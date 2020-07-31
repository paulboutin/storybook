import React from 'react'
import PullQuote from '../../../components/layout/PullQuote'
import { text } from '@storybook/addon-knobs'

export const PullQuoteStory = () => {
  const image = text('Image', 'http://via.placeholder.com/640')
  return <PullQuote image={image} />
}

PullQuoteStory.story = {
  name: 'Pull Quote'
}
