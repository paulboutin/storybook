import React from 'react'

const req = require.context('../../../public/icons/img')
const icons = req
  .keys()
  .map(key => ({ name: key.slice(2, -4), src: `/icons/img/${key}` }))

export const ImageIcons = () => (
  <div className='sb:image-icons'>
    {icons.map((icon, index) => (
      <div key={index} className='sb:image-icon'>
        <img src={icon.src} alt={icon.name} />
        <p>{icon.name}</p>
      </div>
    ))}

    {/* Align last row to the left */}
    <div className='sb:image-icon-filler' />
    <div className='sb:image-icon-filler' />
    <div className='sb:image-icon-filler' />
    <div className='sb:image-icon-filler' />
  </div>
)
