import React from 'react'
import HelpIntro from '../../components/layout/HelpIntro'
import { boolean } from '@storybook/addon-knobs'

export const HelpIntroStory = () => {
  const showLinks = boolean('Show links', true)
  return <HelpIntro showLinks={showLinks} />
}

HelpIntroStory.story = {
  name: 'Help Intro'
}

export default {
  title: 'Layout Components'
}
