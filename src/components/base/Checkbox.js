import React from 'react'
import classNames from 'classnames'

const Checkbox = ({ className, label, checked, disabled }) => (
  <label className={classNames('checkbox-wrapper', className)}>
    <input type='checkbox' defaultChecked={checked} disabled={disabled} />

    <span className='checkbox'>
      <i className='fa fa-check' />
    </span>

    <span className='checkbox-label'>{label}</span>
  </label>
)

export default Checkbox
