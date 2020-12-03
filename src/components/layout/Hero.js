import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'
import Dropdown from '../base/Dropdown'

const states = [
  'Arizona',
  'California',
  'Colorado',
  'Idaho',
  'Iowa',
  'Kansas',
  'Minnesota',
  'Missouri',
  'Nebraska',
  'Nevada',
  'New Mexico',
  'North Dakota',
  'Oklahoma',
  'Oregon',
  'South Dakota',
  'Utah',
  'Washington',
  'Wisconsin',
  'Wyoming'
]

const Hero = ({ type, image, items }) => (
  <section className={classNames('hero', `hero-${type}`)}>
    <img className='hero-img' src={image} alt='Hero image' />
    <article className='hero-content'>
      <Eyebrow>Any deposit checking</Eyebrow>
      <h2 className='hero-heading'>
        No hidden fees.
        <br />
        No hassle.
      </h2>
      <p className='hero-text'>Open an account in about 10 minutes</p>
      <a className='button button-primary hero-button' href='#'>
        Apply Now
      </a>
      <p className='hero-subtext'>
        <Dropdown
          className='dropdown-hero-dropdown'
          type='options'
          label='Not in Alabama?'
          items={items || states}
          inline={true}
        />
      </p>
    </article>
  </section>
)

export default Hero
