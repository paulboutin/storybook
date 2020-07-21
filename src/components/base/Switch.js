import React from 'react'
import classNames from 'classnames'

const Switch = ({ className, label, checked, disabled }) => (
  <label className={classNames('switch-wrapper', className)}>
    <input type='checkbox' defaultChecked={checked} disabled={disabled} />

    <div className='switch'>
      <div className='switch-circle' />
    </div>

    <span className='switch-label'>{label}</span>
  </label>
)

export default Switch
