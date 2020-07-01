import React from 'react'
import { radios } from '@storybook/addon-knobs'

export const Hero = () => {
  const type = radios('Type', ['Full', 'Spaced'], 'Full').toLowerCase()

  return (
    <div className={`hero hero-${type}`}>
      <img
        className='hero-img'
        src='http://via.placeholder.com/1600'
        alt='Hero image'
      />
      <div className='hero-content'>
        <p className='hero-title'>Any deposit checking</p>
        <h2 className='hero-heading'>
          No hidden fees.
          <br />
          No hassle.
        </h2>
        <p className='hero-text'>Open an account in about 10 minutes</p>
        <a className='btn btn-primary hero-btn' href='#'>
          Apply now
        </a>
        <p className='hero-subtext'>
          <span>Not in Alabama? </span>
          <span className='font-bold underline cursor-pointer'>
            Change your state
          </span>
        </p>
      </div>
    </div>
  )
}
