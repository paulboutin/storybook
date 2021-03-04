import React from 'react'
import classNames from 'classnames'

const Accordion = ({
  title,
  children,
  expanded,
  inverted,
  className,
  ...props
}) => (
  <div
    className={classNames(
      'accordion',
      { 'accordion-expanded': expanded },
      { 'accordion-inverted': inverted },
      className
    )}
    {...props}
  >
    <div className='accordion-summary'>
      <p className='accordion-title text-h5 font-semi-bold'>{title}</p>
      <i className='icon' />
    </div>

    <div className='accordion-content'>{children}</div>
  </div>
)

export default Accordion
