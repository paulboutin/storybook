import React from 'react'
import classNames from 'classnames'
import { radios } from '@storybook/addon-knobs'

export const Link = ({ href = '#', inverted, icon, className, children }) => (
  <a
    href={href}
    className={classNames(
      'link',
      { 'link-inverted': inverted, 'link-cta': icon },
      className
    )}
  >
    <span className='link-text'>{children}</span>
    {icon && <span className={`fa fa-${icon}`} />}
  </a>
)

export const LinkStory = () => {
  const type = radios('Type', ['Inline', 'CTA'], 'Inline')

  return <Link icon={type === 'CTA' ? 'long-arrow-alt-right' : null}>Link</Link>
}

LinkStory.story = {
  name: 'Link'
}
