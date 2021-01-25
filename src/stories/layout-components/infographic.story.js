import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import Infographic from '../../components/layout/Infographic'

export const InfographicStory = () => {
  const starBirds = boolean('Starbirds', true)

  return <Infographic className={starBirds ? 'infographic-star-birds' : ''} />
}

InfographicStory.story = {
  name: 'Infographic'
}

export default {
  title: 'Layout Components',
  parameters: {
    'in-dsm': {
      id: '5f29d4c5b0d2de46c17d82aa'
    }
  }
}
