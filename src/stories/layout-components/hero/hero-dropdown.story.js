import React from 'react'
import DropdownHero, {
  defaultTitle
} from '../../../components/layout/DropdownHero'
import { text, array } from '@storybook/addon-knobs'

export const DropdownHeroStory = () => {
  const image = text('Image', '/img/trees.png')
  const title = text('Title', defaultTitle)
  const items = array(
    'Options',
    ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
    '\n'
  )
  return <DropdownHero image={image} items={items} title={title} />
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
