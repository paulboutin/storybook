import React from 'react'
import classNames from 'classnames'
import { radios } from '@storybook/addon-knobs'

export const BUTTON_TYPES = [
  'Primary',
  'Secondary',
  'Tertiary',
  'Ghost',
  'Danger'
]

export const Button = ({ type, label, icon, className, ...props }) => (
  <button
    className={classNames(
      'button',
      `button-${type}`,
      { 'button-icon': icon && !label },
      className
    )}
    {...props}
  >
    {label && <span>{label}</span>}

    {icon && <span className={classNames('fa', `fa-${icon}`)} />}
  </button>
)

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
      {variants.map(({ name, label, icon }) => (
        <div className='sb:button-variant'>
          <h3 className='sb:button-variant-name'>{name}</h3>

          {states.map(state => (
            <div className='sb:button-wrapper'>
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
