import React from 'react'
import Breadcrumbs from '../../../components/base/Breadcrumbs'
import { array } from '@storybook/addon-knobs'

export const BreadcrumbsStory = () => {
  const items = array('Items', ['Item 1', 'Item 2', 'Item 3'], '\n')
  return <Breadcrumbs items={items} />
}

BreadcrumbsStory.story = {
  name: 'Breadcrumbs'
}
