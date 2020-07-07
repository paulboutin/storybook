import React from 'react'
import classNames from 'classnames'
import { text, radios } from '@storybook/addon-knobs'

const defaultText = 'Mobile banking'

export const Eyebrow = ({ text, alt = false }) => (
  <div className={classNames('eyebrow', alt ? 'alt' : '')}>
    <p className='eyebrow-text'>{text}</p>
    <div className='eyebrow-spacer' />
  </div>
)

export const EyebrowStory = () => {
  const placeholder = text('Text', defaultText)
  const type = radios('Type', ['Standard', 'Alt'], 'Standard')

  return <Eyebrow text={placeholder} alt={type === 'Alt'} />
}

EyebrowStory.story = {
  name: 'Eyebrow'
}
