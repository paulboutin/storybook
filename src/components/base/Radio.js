import React from 'react'
import classNames from 'classnames'

const Radio = ({ className, label, name, checked, disabled }) => (
  <label className={classNames('radio-wrapper', className)}>
    <input
      type='radio'
      name={name}
      defaultChecked={checked}
      disabled={disabled}
    />

    <span className='radio' />

    <span className='radio-label'>{label}</span>
  </label>
)

export default Radio
