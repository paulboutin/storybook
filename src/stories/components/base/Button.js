import React from 'react'
import Button from '../../../components/base/Button'
import { radios } from '@storybook/addon-knobs'

export const BUTTON_TYPES = [
  'Primary',
  'Secondary',
  'Tertiary',
  'Ghost',
  'Danger'
]

export const ButtonStory = () => {
  const type = radios('Type', BUTTON_TYPES, 'Primary').toLowerCase()
  const states = ['normal', 'hover', 'active', 'focus', 'disabled']

  const variants = [
    { name: 'Text', label: 'Apply Now', icon: null },
    { name: 'Text + icon', label: 'Apply Now', icon: 'plus' },
    { name: 'Icon', label: null, icon: 'plus' }
  ]

  return (
    <div>
      {variants.map(({ name, label, icon }, index) => (
        <div key={index} className='sb:button-variant'>
          <h3 className='sb:button-variant-name'>{name}</h3>

          {states.map(state => (
            <div key={index} className='sb:button-wrapper'>
              <h4 className='sb:button-title'>{state}</h4>

              <Button
                type={type}
                label={label}
                icon={icon}
                className={`sb:button-${type}-${state}`}
                disabled={state === 'disabled'}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

ButtonStory.story = {
  name: 'Button'
}
