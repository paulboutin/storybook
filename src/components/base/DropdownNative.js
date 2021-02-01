import React from 'react'
import classNames from 'classnames'
import { slugify } from '../../utils'

const DropdownNative = ({
  name,
  items,
  label,
  inline,
  disabled,
  helper,
  error
}) => (
  <div className='dropdown-native-wrapper'>
    <div
      className={classNames('dropdown-native-group', {
        'dropdown-native-inline': inline,
        'dropdown-native-disabled': disabled,
        'dropdown-native-error': !!error
      })}
    >
      <select
        disabled={disabled}
        className={'dropdown-native'}
        name={name}
        id={name}
      >
        <option disabled selected hidden>
          {label}
        </option>
        {items.map((item, idx) => (
          <option
            className='dropdown-native-item'
            key={idx}
            value={slugify(item)}
          >
            {item}
          </option>
        ))}
      </select>

      <i className='icon icon-chevron-down' />
    </div>

    {helper && <p className='dropdown-helper-text'>{helper}</p>}

    {error && (
      <p className='dropdown-error-text'>
        <i className='icon icon-error' />
        {error}
      </p>
    )}
  </div>
)

export default DropdownNative
