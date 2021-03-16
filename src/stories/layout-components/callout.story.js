import React from 'react'
import { text, radios, boolean, number } from '@storybook/addon-knobs'
import Callout from '../../components/layout/Callout'
import ColumnIcons from '../../components/layout/ColumnIcons'

const defaultTitle = 'Headline'
const defaultText = 'Lorem ipsum dolor sit amet'
const defaultEyebrow = 'Eyebrow'

const defaultColumns = [
  {
    icon: '/icons/img/lock-card.svg',
    title: 'Title',
    text: 'Lorem ipsum'
  }
]

const options = {
  Standard: '',
  Green: 'callout-green'
}

const numberOptions = {
  range: true,
  min: 3,
  max: 6,
  step: 1
}

export const CalloutStory = () => {
  let iconsNumber, inverted
  let columns = []

  const bg = radios('Background Color', options, options.Standard, 'config')
  const enable = boolean('Eyebrow Enable', false, 'config')
  const eyebrow = text('Eyebrow Text', defaultEyebrow, 'config')
  const title = text('Title', defaultTitle, 'config')
  const txt = text('Text', defaultText, 'config')
  const centered = boolean('Centered', true, 'config')
  const withIcons = boolean('Icons', true, 'config')

  let classes = bg

  if (centered) {
    classes += ' callout-centered'
  }

  if (withIcons) {
    iconsNumber = number('Items', 3, numberOptions, 'config')
    inverted = boolean('Inverted', false, 'config')
  }

  for (let i = 0; i < iconsNumber; i++) {
    const defaultColumn = defaultColumns[i] || defaultColumns[0]
    const prefix = `Item ${i + 1}`

    columns.push({
      icon: text('Icon', defaultColumn.icon, prefix),
      title: text('Title', defaultColumn.title, prefix),
      text: text('Text', defaultColumn.text, prefix)
    })
  }

  return (
    <Callout
      eyebrow={{ enable: enable, text: eyebrow }}
      title={title}
      text={txt}
      className={classes}
    >
      {withIcons && <ColumnIcons columns={columns} inverted={inverted} />}
    </Callout>
  )
}

CalloutStory.story = {
  name: 'Callout'
}

export default {
  title: 'Layout Components',
  parameters: {
    'in-dsm': {
      id: '5f29d35c914d5c57b21ba08a'
    }
  }
}
