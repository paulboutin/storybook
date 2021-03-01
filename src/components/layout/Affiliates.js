import React from 'react'
import Image from '../base/Image'

const Affiliates = ({ headline, images }) => {
  return (
    <section className='retail-affiliate container'>
      <p className='font-bold text-h6 text-center'>{headline}</p>
      {images.map(({ src, alt }, idx) => (
        <Image className='col-xs-6 col-sm-3' src={src} alt={alt} ratio='auto' />
      ))}
    </section>
  )
}

export default Affiliates
