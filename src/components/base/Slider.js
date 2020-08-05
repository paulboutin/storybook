import React from 'react'

const Slider = ({ children }) => (
  <div className='slider'>
    {React.Children.map(children, child => (
      <div className='slider-slide'>{child}</div>
    ))}
  </div>
)

export default Slider
