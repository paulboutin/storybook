import React from 'react'
import classNames from 'classnames'

const Input = ({ id, value, error, label, ...attrs }) => (
  <div
    className={classNames(
      'input-block',
      value ? 'active' : '',
      error ? 'error' : '',
      attrs.disabled ? 'disabled' : ''
    )}
  >
    <label className='input-label' htmlFor={id}>
      {label}
      {!attrs.required && <span className='input-optional'>(Optional)</span>}
    </label>
    {attrs.type === 'password' && <span className='input-password-control' />}
    <input id={id} className='input-control' defaultValue={value} {...attrs} />
    {error && <p className='input-error'>{error}</p>}
  </div>
)

export default Input
