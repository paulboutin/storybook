import React from 'react'
import { array, radios, text } from '@storybook/addon-knobs'
import ListElement from '../../../components/layout/ListElement/ListElement'
import ListElementImage from '../../../components/layout/ListElement/ListElementImage'
import ListElementItems from '../../../components/layout/ListElement/ListElementItems'

const defaultPlaceholder = 'http://via.placeholder.com/500x400'

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
  const items = array('Items', defaultItems)
  const placeholder = text('Placeholder', defaultPlaceholder)
  const type = radios('Type', ['Standard', 'Alt'], 'Standard')

  const isAlt = type === 'Alt'
  const image = isAlt && <ListElementImage src={placeholder} alt='Image' />

  return (
    <ListElement
      headerText={headerText}
      altLayout={isAlt}
      imageComponent={image}
    >
      <ListElementItems items={items} />
    </ListElement>
  )
}

ListElementStory.story = {
  name: 'List Element'
}
