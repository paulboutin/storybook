import React from 'react'
import Chevron from '../../svg/chevron.svg'

const Select = () => (
  <div className='select'>
    <input type='hidden' className='select-input' />

    <div className='select-wrapper'>
      <span className='select-value'>Label</span>
      <Chevron className='select-icon' />
    </div>

    <ul className='select-options'>
      <li className='select-placeholder' />

      <li className='select-option' data-value='option-1'>
        Option 1
      </li>
      <li className='select-option' data-value='option-2'>
        Option 2
      </li>
      <li className='select-option' data-value='option-3'>
        Option 3
      </li>
    </ul>
  </div>
)

export default Select
