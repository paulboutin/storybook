import React from 'react'
import classNames from 'classnames'
import { slugify } from '../../utils'

const Dropdown = ({
  type,
  label,
  labelTheme,
  items,
  inline,
  disabled,
  helper,
  error,
  className
}) => (
  <div
    className={classNames(
      'dropdown',
      {
        'dropdown-inline': inline,
        'dropdown-disabled': disabled,
        'dropdown-error': !!error
      },
      className
    )}
    tabIndex={disabled ? '-1' : '0'}
  >
    <input type='hidden' className='dropdown-input' disabled={disabled} />

    <div className='dropdown-wrapper'>
      <span
        className={classNames('dropdown-value', {
          [labelTheme]: labelTheme
        })}
      >
        {label}
      </span>
      <i className='dropdown-arrow icon icon-chevron-down' />
    </div>

    <ul className='dropdown-items'>
      {items.map((item, idx) => (
        <li
          className='dropdown-item'
          key={idx}
          data-value={slugify(item)}
          tabIndex='0'
        >
          {type === 'links' ? <a href='/'>{item}</a> : <div>{item}</div>}
        </li>
      ))}
    </ul>

    {helper && <p className='dropdown-helper-text'>{helper}</p>}

    {error && (
      <p className='dropdown-error-text'>
        <i className='icon icon-error' />
        {error}
      </p>
    )}
  </div>
)

export default Dropdown
