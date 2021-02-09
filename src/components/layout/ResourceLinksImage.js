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
      <div className='resource-links-content'>
        <h2 className='resource-links-headline'>{headline}</h2>
        <div className='resource-links-wrapper'>
          {items.map(item => (
            <Link className='resource-link' standalone>
              {item}
            </Link>
          ))}
        </div>
      </div>
    </Highlight>
  )
}

export default ResourceLinksImage
