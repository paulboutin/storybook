import React from 'react'
import classNames from 'classnames'

const Button = ({ type, label, icon, className, link, ...props }) => {
  const classes = classNames(
    'button',
    `button-${type}`,
    { 'button-icon': icon && !label },
    className
  )

  const children = (
    <>
      {label && <span>{label}</span>}
      {icon && <span className={classNames(`icon icon-${icon}`)} />}
    </>
  )

  return link ? (
    <a href={props.href || '#'} className={classes} {...props}>
      {children}
    </a>
  ) : (
    <button type='button' className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
