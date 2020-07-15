import React from 'react'
import classNames from 'classnames'
import { boolean, radios } from '@storybook/addon-knobs'

export const Button = ({ children, type = 'primary', ...attr }) => (
  <button className={classNames('button', `button-${type}`)} {...attr}>
    {children}
  </button>
)

export const ButtonStory = () => {
  const disabled = boolean('Disabled', false)
  const type = radios(
    'Type',
    ['Primary', 'Secondary', 'Tertiary', 'Ghost', 'Link', 'Danger'],
    'Primary'
  )

  return (
    <div style={{ background: '#e9e9e9', padding: '1rem' }}>
      <Button type={type.toLowerCase()} disabled={disabled} focused>
        {type === 'Link' ? (
          <>
            Type something <span className='fa fa-long-arrow-alt-right' />
          </>
        ) : (
          <>
            Apply now <span className='fa fa-plus' />
          </>
        )}
      </Button>
    </div>
  )
}

ButtonStory.story = {
  name: 'Button'
}
