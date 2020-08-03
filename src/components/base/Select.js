import React from 'react'
import classNames from 'classnames'

const Select = ({
  type,
  label,
  items,
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
      <i className='icon icon-down' />
    </div>

    <ul className='select-items'>
      <li className='select-placeholder' />

      {items.map((item, idx) => {
        const value = item
          .replace(/[^\w\s]/g, '')
          .replace(/ /g, '-')
          .toLowerCase()
        return (
          <li key={idx} data-value={value}>
            {type === 'links' ? (
              <a className='select-item' href='/'>
                {item}
              </a>
            ) : (
              <span className='select-item' tabIndex='0'>
                {item}
              </span>
            )}
          </li>
        )
      })}
    </ul>

    {helper && <p className='select-helper-text'>{helper}</p>}

    {error && (
      <p className='select-error-text'>
        <i className='icon icon-help' />
        {error}
      </p>
    )}
  </div>
)

export default Select
