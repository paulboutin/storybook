import React from 'react'
import classNames from 'classnames'

export const Link = ({ inverted = false, href, children }) => (
  <a href={href} className={classNames('link', inverted ? 'inverted' : '')}>
    {children}
  </a>
)

export const LinkStory = () => (
  <Link href='#'>
    Link
    <span className='font-awesome-bold fa-long-arrow-alt-right' />
  </Link>
)

LinkStory.story = {
  name: 'Link'
}
