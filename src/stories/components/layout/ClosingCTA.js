import React from 'react'
import classNames from 'classnames'
import { radios } from '@storybook/addon-knobs'

const heading =
  'Together, we can safeguard the environment and the future of our planet.'

const typeMap = {
  Standard: '',
  Half: 'half',
  Alt: 'alt'
}

export const ClosingCTA = () => {
  const type = radios('Type', ['Standard', 'Half', 'Alt'], 'Standard')

  return (
    <div className={classNames('closing-cta', typeMap[type])}>
      <div className='container'>
        <img
          className='closing-cta-img'
          src='http://via.placeholder.com/1600/464646/464646'
          alt='Hero image'
        />
        <div className='closing-cta-content'>
          <h2 className='closing-cta-heading'>{heading}</h2>
          {type !== 'Half' && (
            <p className='closing-cta-text'>Type something</p>
          )}
          <a className='button button-tertiary' href='#'>
            Call to Action
          </a>
        </div>
      </div>
    </div>
  )
}
