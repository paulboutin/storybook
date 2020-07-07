import React from 'react'

export const Link = ({ href, children }) => (
  <a href={href} className='link'>
    {children}
  </a>
)

export const LinkStory = () => (
  <Link href='#'>
    Link
    <span className='ml-8 font-awesome font-bold fa-long-arrow-alt-right' />
  </Link>
)

LinkStory.story = {
  name: 'Link'
}
