import React from 'react'
import classNames from 'classnames'
import { radios } from '@storybook/addon-knobs'
import { Eyebrow } from '../base/Eyebrow'
import { Link } from '../base/Link'

const eyebrow = 'Mobile banking'
const heading = 'Banking whenever, wherever'
const text =
  'Deposit checks, transfer funds, pay your bills, and manage all of your finances securely, right on the mobile app.'
const link = 'See all you can do in mobile banking'

const classes = {
  Standard: '',
  Alt: 'alt',
  Accent: 'accent'
}

export const PromoElement = () => {
  const type = radios('Type', ['Standard', 'Alt', 'Accent'], 'Standard')

  return (
    <div className={classNames('promo-element', classes[type])}>
      <div className='promo-element-img-wrapper'>
        <img
          className='promo-element-img'
          src='http://via.placeholder.com/1600'
          alt='Hero image'
        />
      </div>
      <div className='promo-element-content-wrapper'>
        <div className='promo-element-content'>
          <Eyebrow
            text={eyebrow}
            alt={['Alt', 'Accent'].includes(type)}
            inverted={type === 'Accent'}
          />
          <h2 className='promo-element-heading'>{heading}</h2>
          <p className='promo-element-text'>{text}</p>
          <Link href='#' inverted={type === 'Accent'}>
            {link}
            <span className='link-pad-left fa fa-long-arrow-alt-right' />
          </Link>
        </div>
      </div>
    </div>
  )
}
