import React from 'react'
import classNames from 'classnames'

const Switch = ({ className, label, checked, disabled }) => (
  <label className={classNames('switch-wrapper', className)}>
    <input type='checkbox' defaultChecked={checked} disabled={disabled} />
    <span className='switch-label'>{label}</span>

    <div className='switch'>
      <div className='switch-circle' />
    </div>
  </label>
)

export default Switch
