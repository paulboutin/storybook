import React from 'react'
import classNames from 'classnames'
import { radios, text } from '@storybook/addon-knobs'
import { Eyebrow } from '../base/Eyebrow'

export const Hero = () => {
  const type = radios('Type', ['Full', 'Spaced'], 'Full')
  const image = text('Image', 'http://via.placeholder.com/1600')

  return (
    <div
      className={classNames(
        'hero',
        type === 'Spaced' ? 'hero-spaced' : 'hero-full'
      )}
    >
      <img className='hero-img' src={image} alt='Hero image' />
      <div className='hero-content'>
        <Eyebrow text='Any deposit checking' />
        <h3 className='hero-heading'>
          No hidden fees.
          <br />
          No hassle.
        </h3>
        <p className='hero-text'>Open an account in about 10 minutes</p>
        <a className='button button-primary hero-button' href='#'>
          Apply Now
        </a>
        <p className='hero-subtext'>
          <span>Not in Alabama? </span>
          <span>Change your state</span>
        </p>
      </div>
    </div>
  )
}
