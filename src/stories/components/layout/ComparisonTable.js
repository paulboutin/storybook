import React from 'react'
import * as tables from '../../../components/layout/ComparisonTable'
import { radios } from '@storybook/addon-knobs'

export const ComparisonTableStory = () => {
  const type = radios('Type', ['A', 'B'], 'A')
  const Table = tables['ComparisonTable' + type]
  return <Table />
}

ComparisonTableStory.story = {
  name: 'Comparison Table'
}
