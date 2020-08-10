import React from 'react'
import classNames from 'classnames'

const Slider = ({ children, className, axis, transitionOpacity }) => (
  <div
    className={classNames('slider', className)}
    data-axis={axis}
    data-transition-opacity={transitionOpacity}
  >
    {React.Children.map(children, child => (
      <div className='slider-slide'>{child}</div>
    ))}
  </div>
)

export default Slider
