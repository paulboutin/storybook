import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../../components/base/Eyebrow'
import { text, radios, boolean } from '@storybook/addon-knobs'

const options = {
  Grey: '',
  White: 'white'
}

export const EyebrowStory = () => {
  let className = ''
  const txt = text('Text', 'Eyebrow Text')
  const color = radios('Color', options, options.Grey)
  const center = boolean('Centered', false)

  className += color

  if (center) className = className + ' centered'

  return (
    <div
      className={classNames('sb:eyebrow', {
        'sb:eyebrow-white': color === options.White
      })}
    >
      <Eyebrow className={className}>{txt}</Eyebrow>
    </div>
  )
}

EyebrowStory.story = {
  name: 'Eyebrow'
}

export default {
  title: 'Base Components',
  parameters: {
    'in-dsm': {
      id: '5f6ba2e434518485174a7d61'
    }
  }
}
