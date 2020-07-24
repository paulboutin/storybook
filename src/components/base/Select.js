import React from 'react'
import Chevron from '../../svg/chevron.svg'

const Select = () => (
  <div className='select' tabIndex='0'>
    <input type='hidden' className='select-input' />

    <div className='select-wrapper'>
      <span className='select-value'>Label</span>
      <Chevron className='select-icon' />
    </div>

    <ul className='select-options'>
      <li className='select-placeholder' />

      <li className='select-option' data-value='option-1' tabIndex='0'>
        Option number 1
      </li>
      <li className='select-option' data-value='option-2' tabIndex='0'>
        Option number 2
      </li>
      <li className='select-option' data-value='option-3' tabIndex='0'>
        Option number 3
      </li>
    </ul>
  </div>
)

export default Select
