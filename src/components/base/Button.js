import React from 'react'
import classNames from 'classnames'

const Button = ({ type, label, icon, className, ...props }) => (
  <button
    type='button'
    className={classNames(
      'button',
      `button-${type}`,
      { 'button-icon': icon && !label },
      className
    )}
    {...props}
  >
    {label && <span>{label}</span>}

    {icon && <span className={classNames('fa', `fa-${icon}`)} />}
  </button>
)

export default Button
