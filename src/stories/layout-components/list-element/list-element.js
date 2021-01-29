import React from 'react'
import { array, text, boolean } from '@storybook/addon-knobs'
import ListElement from '../../../components/layout/ListElement'

const defaultImage = 'http://via.placeholder.com/640x480'

const defaultItems = [
  '$0 monthly service charge with any deposit per statement',
  'Free access to Online Banking in our mobile app',
  'No minimum balance',
  'No direct deposit required'
]

const headerText = {
  eyebrow: 'Features',
  heading: 'Here are the basics',
  text: 'Manage your money while contributing with the planet'
}

export const ListElementStory = ({ type }) => {
  const enableEyebrow = boolean('Eyebrow Enable', true)
  const eyebrow = text('Eyebrow Text', headerText.eyebrow)
  const items = array('Items', defaultItems)
  const heading = text('Title', headerText.heading)
  const textContent = text('Text', headerText.text)

  const isAlt = type === 'alt'
  let image

  if (isAlt) {
    image = text('Image', defaultImage)
  }

  return (
    <ListElement
      headerText={{
        heading,
        eyebrow: { enable: enableEyebrow, text: eyebrow },
        text: textContent
      }}
      altLayout={isAlt}
      image={isAlt ? { src: image, alt: 'List image' } : null}
      items={items}
    />
  )
}
