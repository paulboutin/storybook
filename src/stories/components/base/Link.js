import React from 'react'
import Link from '../../../components/base/Link'

export const LinkStory = () => {
  const types = ['inline', 'standalone']
  const states = ['normal', 'hover', 'active', 'focus', 'visited']

  return (
    <div>
      {types.map(type => (
        <div key={type} className='sb:link-type'>
          <h3 className='sb:link-type-name'>{type}</h3>

          {states.map(state => (
            <div key={state} className='sb:link-wrapper'>
              <h4 className='sb:link-title'>{state}</h4>
              <Link
                standalone={type === 'standalone'}
                className={`sb:link-${type}-${state}`}
              >
                Link
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

LinkStory.story = {
  name: 'Link'
}
