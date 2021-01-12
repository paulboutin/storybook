import React from 'react'
import HelpIntro from '../../components/layout/HelpIntro'
import { boolean } from '@storybook/addon-knobs'

export const HelpIntroStory = () => {
  const showLinks = boolean('Show links', true)
  return <HelpIntro showLinks={showLinks} />
}

HelpIntroStory.storyName = 'Help Intro'

export default {
  title: 'Layout Components',
  parameters: {
    'in-dsm': {
      id: '5f6ce0a4c5551906690680a9'
    }
  }
}
