import React from 'react'
import { array, radios, text } from '@storybook/addon-knobs'
import ListElement from '../../../components/layout/ListElement'

const defaultImage = 'http://via.placeholder.com/500x400'

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

export const ListElementStory = () => {
  const type = radios('Type', ['Standard', 'Alt'], 'Standard')
  const items = array('Items', defaultItems)
  const isAlt = type === 'Alt'
  let image

  if (isAlt) {
    image = text('Image', defaultImage)
  }

  return (
    <ListElement
      headerText={headerText}
      altLayout={isAlt}
      image={isAlt ? { src: image, alt: 'List image' } : null}
      items={items}
    />
  )
}

ListElementStory.story = {
  name: 'List Element'
}
