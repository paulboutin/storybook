import React from 'react'
import { array, text, boolean, radios } from '@storybook/addon-knobs'
import ListElement from '../../../components/layout/ListElement'

const defaultImage = '/img/butterfly.png'

const defaultItems = [
  'Line 1',
  'Line 1',
  'Line 1',
  'Line 1',
  'Line 1',
  'Line 1',
  'Line 1'
]

const headerText = {
  eyebrow: 'Eyebrow',
  heading: 'Headline',
  text:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
}

const sideOptions = {
  Left: 'reversed',
  Right: ''
}

export const ContentList = ({ type }) => {
  const enableEyebrow = boolean('Eyebrow Enable', true)
  const eyebrow = text('Eyebrow Text', headerText.eyebrow)
  const items = array('Items', defaultItems, ';')
  const heading = text('Title', headerText.heading)
  const textContent = text('Text', headerText.text)

  let image, reversed

  if (type === 'image') {
    image = text('Image', defaultImage)
    reversed = radios('Side', sideOptions, sideOptions.Left)
  }

  return (
    <ListElement
      type={type}
      reversed={reversed === sideOptions.Left}
      headerText={{
        heading,
        eyebrow: { enable: enableEyebrow, text: eyebrow },
        text: textContent
      }}
      image={{ src: image, alt: 'List image' }}
      items={items}
    />
  )
}
