import React from 'react'
import classNames from 'classnames'
import { radios } from '@storybook/addon-knobs'

export const Hero = () => {
  const type = radios('Type', ['Full', 'Spaced'], 'Full')

  return (
    <div
      className={classNames(
        'hero',
        type === 'Spaced' ? 'hero-spaced' : 'hero-full'
      )}
    >
      <img
        className='hero-img'
        src='http://via.placeholder.com/1600'
        alt='Hero image'
      />
      <div className='hero-content'>
        <p className='hero-eyebrow'>Any deposit checking</p>
        <h2 className='hero-heading'>
          No hidden fees.
          <br />
          No hassle.
        </h2>
        <p className='hero-text'>Open an account in about 10 minutes</p>
        <a className='button button-primary hero-button' href='#'>
          Apply now
        </a>
        <p className='hero-subtext'>
          <span>Not in Alabama? </span>
          <span>Change your state</span>
        </p>
      </div>
    </div>
  )
}
