import React from 'react'
import { Highlight } from './Highlight'
import Link from '../base/Link'

export const ResourceLinksList = ({ headline, items }) => (
  <div className='highlight-content-container resource-links-content'>
    {headline && (
      <h3 className='resource-links-headline text-h2'>{headline}</h3>
    )}
    <div className='resource-links-wrapper'>
      {items.map(({ href, text }, idx) => (
        <Link href={href || '#'} key={idx} className='resource-link' standalone>
          {text}
        </Link>
      ))}
    </div>
  </div>
)

const ResourceLinksImage = ({ type, reverse, headline, image = {}, items }) => {
  return (
    <Highlight
      type={type}
      image={image}
      reverse={reverse}
      className='resource-links-image'
    >
      <ResourceLinksList headline={headline} items={items} />
    </Highlight>
  )
}

export default ResourceLinksImage
