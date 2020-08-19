import React from 'react'
import Select from '../base/Select'

const DropdownHero = ({ image, items }) => (
  <div className='dropdown-hero'>
    <img src={image} alt='Hero image' className='dropdown-hero-img' />

    <div className='dropdown-hero-content container'>
      <h1 className='dropdown-hero-title'>We stand with your small business</h1>
      <Select
        className='dropdown-hero-select'
        type='links'
        label='How can we help you?'
        items={items}
      />
    </div>
  </div>
)

export default DropdownHero
