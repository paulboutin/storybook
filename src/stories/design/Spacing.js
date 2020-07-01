import React from 'react'
import config from '../../../tailwind.config.js'

export const Spacing = () => {
  const sizes = Object.keys(config.theme.spacing).slice(1)

  return (
    <div>
      <h2 className='mb-12 text-grey-40'>Spacing scale</h2>
      <div className='flex flex-wrap justify-between items-end mb-48'>
        {sizes.map(size => (
          <div key={size} className='flex flex-col items-center'>
            <div className={`w-${size} h-${size} bg-green mb-12`} />
            <span>{size}</span>
          </div>
        ))}
      </div>

      <h2 className='mb-12 text-grey-40'>Padding</h2>
      <div className='flex flex-wrap justify-between items-end mb-48'>
        {sizes.slice(0, -1).map(size => (
          <div key={size} className={`p-${size} bg-green mb-12`}>
            <div className='w-16 h-16 bg-green-darker' />
          </div>
        ))}
      </div>

      <h2 className='mb-12 text-grey-40'>Margin</h2>
      <div>
        {sizes.concat('0').map(size => (
          <p key={size} className={`mb-${size} bg-grey-20`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        ))}
      </div>
    </div>
  )
}
