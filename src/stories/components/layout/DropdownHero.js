import React from 'react'
import DropdownHero from '../../../components/layout/DropdownHero'
import { text, array } from '@storybook/addon-knobs'

export const DropdownHeroStory = () => {
  const image = text('Image', 'http://via.placeholder.com/1600')
  const items = array('Links', ['Link 1', 'Link 2', 'Link 3'], '\n')
  return <DropdownHero image={image} items={items} />
}

DropdownHeroStory.story = {
  name: 'Hero Dropdown'
}
