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

export const Hero = ({ type, image, children }) => (
  <section className={classNames('hero', `hero-${type}`)}>
    <img className='hero-img' src={image} alt='Hero image' />
    <article className='hero-content'>{children}</article>
  </section>
)

const DefaultHeroContent = () => (
  <>
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
    <br />
    <span className='hero-subtext'>Not in Alabama?</span>
    <Dropdown
      label='Change your state'
      labelTheme='primary'
      type='Options'
      items={states}
      inline
    />
  </>
)

const DefaultHero = ({ type, image }) => (
  <Hero type={type} image={image}>
    <DefaultHeroContent />
  </Hero>
)

export default DefaultHero
