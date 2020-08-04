import React from 'react'
import classNames from 'classnames'

const Input = ({ id, value, error, help, label, ...attrs }) => (
  <div
    className={classNames(
      'input-block',
      value ? 'input-active' : '',
      error ? 'input-error' : '',
      attrs.disabled ? 'input-disabled' : ''
    )}
  >
    <label className='input-label' htmlFor={id}>
      {label}
      {!attrs.required && <span className='input-optional'>(Optional)</span>}
    </label>
    {attrs.type === 'password' && (
      <i className='icon icon-show input-password-control' />
    )}
    <input id={id} className='input-control' defaultValue={value} {...attrs} />
    {help && (
      <p className='input-help'>
        {error && <i className='icon icon-error' />}
        {error || help}
      </p>
    )}
  </div>
)

export default Input
