import React from 'react'

const Slider = ({ children, axis }) => (
  <div className='slider' data-axis={axis}>
    {React.Children.map(children, child => (
      <div className='slider-slide'>{child}</div>
    ))}
  </div>
)

export default Slider
