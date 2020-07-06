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

export const PromoElement = () => {
  const type = radios('Type', ['Standard', 'Alt'], 'Standard')

  return (
    <div
      className={classNames('promo-element', type === 'Standard' ? '' : 'alt')}
    >
      <img
        className='promo-element-img'
        src='http://via.placeholder.com/1600'
        alt='Hero image'
      />
      <div className='promo-element-content'>
        <Eyebrow text={eyebrow} alt={type === 'Alt'} />
        <h2 className='promo-element-heading'>{heading}</h2>
        <p className='promo-element-text'>{text}</p>
        <Link href='#'>
          {link}
          <span className='ml-8 font-awesome font-bold fa-long-arrow-alt-right' />
        </Link>
      </div>
    </div>
  )
}
