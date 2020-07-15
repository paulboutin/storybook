import React from 'react'
import classNames from 'classnames'
import { radios } from '@storybook/addon-knobs'
import { Eyebrow } from '../base/Eyebrow'
import { Link } from '../base/Link'

const eyebrow = 'Sustainable banking'
const heading = 'The strongest environmental stance of any major bank.'
const text =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

const classes = {
  Standard: '',
  Accent: 'accent'
}

const PromoElementCTAWrapper = ({ type }) => (
  <div className='cta-wrapper'>
    {type === 'Accent' ? (
      <button
        className={classNames(
          'button',
          type === 'Standard' ? 'button-primary' : 'button-secondary'
        )}
      >
        Call to Action
      </button>
    ) : (
      <Link href='#' icon='long-arrow-alt-right'>
        See all you can do in mobile banking
      </Link>
    )}
  </div>
)

export const PromoElement = () => {
  const type = radios('Type', ['Standard', 'Accent'], 'Standard')

  return (
    <div className={classNames('promo-element', classes[type])}>
      <div className='promo-element-center'>
        <div className='promo-element-content'>
          <Eyebrow text={eyebrow} inverted={type === 'Accent'} />
          <h2 className='promo-element-heading'>{heading}</h2>
          <p className='promo-element-text'>{text}</p>
          <PromoElementCTAWrapper type={type} />
        </div>
        <div className='promo-element-img-wrapper'>
          <img
            className='promo-element-img'
            src='http://via.placeholder.com/1600'
            alt='Hero image'
          />
        </div>
        <PromoElementCTAWrapper type={type} />
      </div>
    </div>
  )
}
