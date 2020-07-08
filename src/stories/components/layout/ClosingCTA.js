import React from 'react'
import classNames from 'classnames'
import { radios } from '@storybook/addon-knobs'

const heading = 'Open your account online in about 10 minutes'

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
        <a className='button button-primary closing-cta-button' href='#'>
          Apply now
        </a>
      </div>
    </div>
  )
}
