import React from 'react'
import classNames from 'classnames'

export const Link = ({ href = '#', icon, className, children }) => (
  <a
    href={href}
    className={classNames(
      'link',
      icon ? 'link-standalone' : 'link-inline',
      className
    )}
  >
    {children}
    {icon && <span className={`fa fa-${icon}`} />}
  </a>
)

export const LinkStory = () => {
  const types = ['inline', 'standalone']
  const states = ['normal', 'hover', 'active', 'focus', 'visited']

  return (
    <div>
      {types.map(type => {
        const icon = type === 'standalone' ? 'long-arrow-alt-right' : null

        return (
          <div key={type} className='sb:link-type'>
            <h3 className='sb:link-type-name'>{type}</h3>

            {states.map(state => (
              <div className='sb:link-wrapper'>
                <h4 className='sb:link-title'>{state}</h4>
                <Link icon={icon} className={`sb:link-${type}-${state}`}>
                  Link
                </Link>
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}

LinkStory.story = {
  name: 'Link'
}
