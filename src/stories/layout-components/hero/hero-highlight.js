import React from 'react'
import { boolean, text, radios } from '@storybook/addon-knobs'
import Highlight from '../../../components/layout/Highlight'
import Button from '../../../components/base/Button'

const options = {
  Left: 'left',
  Right: 'right'
}

const HeroHighlight = ({ type }) => {
  const image = text('Image', '/img/trees.png')
  const eyebrow = {
    enable: boolean('Enable Eyebrow', true),
    text: text('Eyebrow text', 'Eyebrow')
  }
  const title = text('Title', 'Headline')
  const textContent = text('Text', 'Subtext')

  const side = radios('Side', options, options.Right)

  const button = text('Button', 'Label')
  const line1 = text('Line 1', '000-000-000')
  const line2 = text('Line 2', '000-000-000')
  const line3 = text(
    'Line 3',
    'Privilege Connect<br/>24/7 Exclusive Assistance'
  )

  return (
    <Highlight
      className='centered'
      type={type}
      image={image}
      eyebrow={eyebrow}
      text={textContent}
      title={title}
      reverse={side === options.Left}
    >
      <div className='flex-content'>
        <Button className='fullwidth-xs' type='primary' label={button} />
        <p className='font-bold text-green'>{line1}</p>
        <p className='font-bold text-green'>{line2}</p>
        <p className='font-bold' dangerouslySetInnerHTML={{ __html: line3 }} />
      </div>
    </Highlight>
  )
}

export default HeroHighlight
