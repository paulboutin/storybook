import React from 'react'

const PromoElementImage = ({ src, alt }) => (
  <div className='promo-element-img-wrapper'>
    <img className='promo-element-img' src={src} alt={alt} />
  </div>
)

export default PromoElementImage
