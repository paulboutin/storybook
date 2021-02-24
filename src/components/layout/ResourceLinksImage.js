import React from 'react'
import { Highlight } from './Highlight'
import Link from '../base/Link'

const ResourceLinksImage = ({ type, reverse, headline, image = {}, items }) => {
  return (
    <Highlight
      type={type}
      image={image}
      reverse={reverse}
      className='resource-links-image'
    >
      <div className='highlight-content-container resource-links-content'>
        <h3 className='resource-links-headline text-h2'>{headline}</h3>
        <div className='resource-links-wrapper'>
          {items.map((item, idx) => (
            <Link key={idx} className='resource-link' standalone>
              {item}
            </Link>
          ))}
        </div>
      </div>
    </Highlight>
  )
}

export default ResourceLinksImage
