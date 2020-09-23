import React from 'react'
import Link from '../../../components/base/Link'

export const LinkStory = ({ type }) => {
  const states = ['normal', 'hover', 'active', 'focus', 'visited']

  return (
    <div key={type} className='sb:link'>
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
  )
}
