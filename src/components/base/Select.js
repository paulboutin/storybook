import React from 'react'
import Chevron from '../../svg/chevron.svg'
import classNames from 'classnames'

const Select = ({ label, options, inline, className }) => (
  <div
    className={classNames('select', { 'select-inline': inline }, className)}
    tabIndex='0'
  >
    <input type='hidden' className='select-input' />

    <div className='select-wrapper'>
      <span className='select-value'>{label}</span>
      <Chevron className='select-icon' />
    </div>

    <ul className='select-options'>
      <li className='select-placeholder' />

      {options.map(option => {
        const value = option
          .replace(/[^\w\s]/g, '')
          .replace(/ /g, '-')
          .toLowerCase()
        return (
          <li className='select-option' tabIndex='0' data-value={value}>
            {option}
          </li>
        )
      })}
    </ul>
  </div>
)

export default Select
