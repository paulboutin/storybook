import React from 'react'
import Link from '../../components/base/Link'

const LinkStory = ({ type }) => {
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

export const Inline = () => <LinkStory type='inline' />
export const Standalone = () => <LinkStory type='standalone' />

export default {
  title: 'Base Components/Link'
}
