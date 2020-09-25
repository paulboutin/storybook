import React from 'react'
import DropdownHero from '../../../components/layout/DropdownHero'
import { text, array } from '@storybook/addon-knobs'

export const DropdownHeroStory = () => {
  const image = text('Image', 'http://via.placeholder.com/1600')
  const items = array('Links', ['Link 1', 'Link 2', 'Link 3'], '\n')
  return <DropdownHero image={image} items={items} />
}

DropdownHeroStory.story = {
  name: 'Dropdown'
}

export default {
  title: 'Layout Components/Hero',
  parameters: {
    'in-dsm': {
      id: '5f29d587914d5c164c1ba09c'
    }
  }
}
