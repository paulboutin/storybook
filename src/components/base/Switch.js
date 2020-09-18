import React from 'react'
import classNames from 'classnames'

const Switch = ({ className, label, checked, disabled }) => (
  <label className={classNames('switch-wrapper', className)}>
    <input type='checkbox' defaultChecked={checked} disabled={disabled} />
    <span className='switch-label'>{label}</span>

    <span className='switch'>
      <span className='switch-circle' />
    </span>
  </label>
)

export default Switch
