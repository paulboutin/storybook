import React from 'react'
import * as comparisons from '../../../components/layout/Comparison'
import { radios } from '@storybook/addon-knobs'

export const ComparisonStory = () => {
  const type = radios('Type', ['A', 'B'], 'A')
  const Comparison = comparisons['Comparison' + type]
  return <Comparison />
}

ComparisonStory.story = {
  name: 'Comparison'
}
