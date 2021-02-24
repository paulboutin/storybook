import React from 'react'
import ResourceLinks, {
  ResourceLinksDoubleColumns,
  ResourceLinksSingleColumn,
  defaultContent,
  defaultItems
} from '../../../components/layout/ResourceLinks'
import { boolean, text, radios, array } from '@storybook/addon-knobs'

const options = {
  '1': '1',
  '2': '2'
}

export const ResourceLinksStandard = () => {
  const columns = radios('Columns', options, '2')
  const enableEyebrow = boolean('Eyebrow Enable', true)
  const eyebrow = text('Eyebrow Text', defaultContent.eyebrow)
  const title = text('Title', defaultContent.title)
  const textContent = text('Text', defaultContent.text)
  const items = array('Items', defaultItems, ';')

  return (
    <ResourceLinks
      eyebrow={{ enable: enableEyebrow, text: eyebrow }}
      title={title}
      text={textContent}
    >
      {columns === '2' ? (
        <ResourceLinksDoubleColumns items={items} />
      ) : (
        <ResourceLinksSingleColumn items={items} />
      )}
    </ResourceLinks>
  )
}

export default {
  title: 'Layout Components/Resource Links',
  parameters: {
    'in-dsm': {
      id: '5f29d6d1914d5c98271ba0a8'
    }
  }
}
