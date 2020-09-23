import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'

const Hero = ({ type, image }) => (
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
        <span>Not in Alabama? </span>
        <span className='link link-standalone'>Change your state</span>
      </p>
    </article>
  </section>
)

export default Hero
