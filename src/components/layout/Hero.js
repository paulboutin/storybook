import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'
import Dropdown from '../base/Dropdown'

export const defaultEyebrow = 'Any deposit checking'
export const defaultText = 'Open an account in about 10 minutes'
export const defaultTitle = `
  No hidden fees.
  <br />
  No hassle.
`

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

const DefaultHeroContent = ({
  eyebrow = defaultEyebrow,
  text = defaultText,
  title = defaultTitle
}) => (
  <>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h3
      className='hero-heading text-h2 lg:text-h1'
      dangerouslySetInnerHTML={{ __html: title }}
    />
    {text && (
      <p className='hero-text' dangerouslySetInnerHTML={{ __html: text }} />
    )}
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

const DefaultHero = ({ type, image, eyebrow, text, title }) => (
  <Hero type={type} image={image}>
    <DefaultHeroContent eyebrow={eyebrow} text={text} title={title} />
  </Hero>
)

export default DefaultHero
