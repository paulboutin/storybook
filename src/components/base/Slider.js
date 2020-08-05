import React from 'react'
import classNames from 'classnames'

const Slider = ({ children, className, axis }) => (
  <div className={classNames('slider', className)} data-axis={axis}>
    {React.Children.map(children, child => (
      <div className='slider-slide'>{child}</div>
    ))}
  </div>
)

export default Slider
