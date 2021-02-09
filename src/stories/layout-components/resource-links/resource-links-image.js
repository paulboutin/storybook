import React from 'react'
import { array, radios, text } from '@storybook/addon-knobs'
import ResourceLinksImage from '../../../components/layout/ResourceLinksImage'

const defaultImage = '/img/plant.png'
const defaultTitle = 'Headline'

const defaultItems = [
  'Line 1',
  'Line 2',
  'Line 3',
  'Line 4',
  'Line 5',
  'Line 6',
  'Line 7'
]

const sideOptions = {
  Left: 'left',
  Right: 'right'
}

const ResourceLinksImageStory = ({ type }) => {
  const reverse = radios('Side', sideOptions, sideOptions.Right)
  const image = text('Image', defaultImage)
  const headline = text('Title', defaultTitle)
  const items = array('Items', defaultItems, ';')

  return (
    <ResourceLinksImage
      type={type}
      reverse={reverse === 'left'}
      headline={headline}
      image={image}
      items={items}
    />
  )
}

export default ResourceLinksImageStory
