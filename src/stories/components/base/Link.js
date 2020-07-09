import React from 'react'
import classNames from 'classnames'

export const Link = ({
  href,
  inverted = false,
  icon,
  iconPosition = 'right',
  className,
  children
}) => {
  const Icon = <span className={`fa fa-${icon} link-icon-${iconPosition}`} />

  return (
    <a
      href={href}
      className={classNames('link', inverted ? 'inverted' : '', className)}
    >
      {icon && iconPosition === 'left' && Icon}
      {children}
      {icon && iconPosition === 'right' && Icon}
    </a>
  )
}

export const LinkStory = () => (
  <Link href='#' icon='long-arrow-alt-right'>
    Link
  </Link>
)

LinkStory.story = {
  name: 'Link'
}
