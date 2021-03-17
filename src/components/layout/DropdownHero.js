import React from 'react'
import Dropdown from '../base/Dropdown'
import Image from '../base/Image'

export const defaultTitle = 'We stand with your small business'

const DropdownHero = ({ image, items, title = defaultTitle }) => (
  <section className='dropdown-hero'>
    <Image
      src={image}
      alt='Hero image'
      className='dropdown-hero-img'
      ratio='16:9'
    />
    <div className='dropdown-hero-overlay' />

    <div className='dropdown-hero-content container'>
      <h2 className='dropdown-hero-title text-h1'>{title}</h2>
      <Dropdown
        className='dropdown-hero-dropdown'
        type='Options'
        label='How can we help you?'
        items={items}
      />
    </div>
  </section>
)

export default DropdownHero
