import React from 'react'
import classNames from 'classnames'

const Checkbox = ({ className, label, checked, disabled }) => (
  <label className={classNames('checkbox-wrapper', className)}>
    <input type='checkbox' defaultChecked={checked} disabled={disabled} />

    <span className='checkbox'>
      <i className='icon icon-check-solid' />
    </span>

    <span className='checkbox-label'>{label}</span>
  </label>
)

export default Checkbox
