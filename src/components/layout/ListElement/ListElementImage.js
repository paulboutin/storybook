import React from 'react'

const ListElementImage = ({ src, alt }) => (
  <div className='list-element-image-wrapper'>
    <img className='list-element-image' src={src} alt={alt} />
  </div>
)

export default ListElementImage
