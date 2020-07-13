import React from 'react'
import classNames from 'classnames'
import { radios } from '@storybook/addon-knobs'

const heading =
  'Together, we can safeguard the environment and the future of our planet.'

export const ClosingCTA = () => {
  const type = radios('Type', ['Standard', 'Alt'], 'Standard')

  return (
    <div
      className={classNames('closing-cta', type === 'Standard' ? '' : 'alt')}
    >
      <img
        className='closing-cta-img'
        src='http://via.placeholder.com/1600/464646/464646'
        alt='Hero image'
      />
      <div className='closing-cta-content'>
        <h2 className='closing-cta-heading'>{heading}</h2>
        <p className='closing-cta-text'>Type something</p>
        <a className='button button-secondary closing-cta-button' href='#'>
          Apply now
        </a>
      </div>
    </div>
  )
}
