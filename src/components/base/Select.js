import React from 'react'
import Chevron from '../../svg/chevron.svg'
import classNames from 'classnames'

const Select = ({
  label,
  options,
  inline,
  disabled,
  helper,
  error,
  className
}) => (
  <div
    className={classNames(
      'select',
      {
        'select-inline': inline,
        'select-disabled': disabled,
        'select-error': !!error
      },
      className
    )}
    tabIndex={disabled ? '-1' : '0'}
  >
    <input type='hidden' className='select-input' disabled={disabled} />

    <div className='select-wrapper'>
      <span className='select-value'>{label}</span>
      <Chevron className='select-icon' />
    </div>

    <ul className='select-options'>
      <li className='select-placeholder' />

      {options.map((option, idx) => {
        const value = option
          .replace(/[^\w\s]/g, '')
          .replace(/ /g, '-')
          .toLowerCase()
        return (
          <li
            key={idx}
            className='select-option'
            tabIndex='0'
            data-value={value}
          >
            {option}
          </li>
        )
      })}
    </ul>

    {helper && <p className='select-helper-text'>{helper}</p>}

    {error && (
      <p className='select-error-text'>
        <i className='fa fa-exclamation-circle' />
        {error}
      </p>
    )}
  </div>
)

export default Select
