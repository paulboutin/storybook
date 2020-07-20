import React from 'react'
import classNames from 'classnames'

const TextArea = ({ id, value, error, label, ...attrs }) => (
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
    <textarea id={id} className='input-control' {...attrs}>
      {value}
    </textarea>
    {error && <p className='input-error'>{error}</p>}
  </div>
)

export default TextArea
