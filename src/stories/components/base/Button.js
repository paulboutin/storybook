import React from 'react'
import classNames from 'classnames'
import { boolean, radios } from '@storybook/addon-knobs'

export const BUTTON_TYPES = [
  'Primary',
  'Secondary',
  'Tertiary',
  'Ghost',
  'Danger',
  'Link'
]

export const Button = ({ type = 'primary', children, className, ...attr }) => (
  <button
    className={classNames('button', `button-${type}`, className)}
    {...attr}
  >
    {children}
  </button>
)

export const ButtonStory = () => {
  const disabled = boolean('Disabled', false)
  const type = radios('Type', BUTTON_TYPES, 'Primary').toLowerCase()
  const states = ['normal', 'hover', 'active', 'focus', 'disabled']

  return (
    <div className='sb:buttons'>
      {states.map(state => {
        const normal = state === 'normal'

        return (
          <div className='sb:button-wrapper'>
            <h4 className='sb:button-title'>{state}</h4>

            <Button
              type={type}
              className={classNames(!normal && `sb:button-${type}-${state}`)}
              disabled={state === 'normal' && disabled}
              tabIndex={normal ? 1 : -1}
            >
              Apply Now
              <span
                className={classNames(
                  'fa',
                  type === 'link' ? 'fa-long-arrow-alt-right' : 'fa-plus'
                )}
              />
            </Button>
          </div>
        )
      })}
    </div>
  )
}

ButtonStory.story = {
  name: 'Button'
}
