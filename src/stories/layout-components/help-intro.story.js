import React from 'react'
import HelpIntro from '../../components/layout/HelpIntro'
import { boolean } from '@storybook/addon-knobs'

export const HelpIntroStory = () => {
  const showLinks = boolean('Show links', true)
  const fullwidth = boolean('Full-width', true)
  return <HelpIntro showLinks={showLinks} fullWidth={fullwidth} />
}

HelpIntroStory.story = {
  name: 'Help Intro'
}

export default {
  title: 'Layout Components',
  parameters: {
    'in-dsm': {
      id: '5f6ce0a4c5551906690680a9'
    }
  }
}
