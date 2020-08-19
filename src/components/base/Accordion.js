import React from 'react'
import classNames from 'classnames'

const Accordion = ({ title, children, expanded, inverted, className }) => (
  <div
    className={classNames(
      'accordion',
      { 'accordion-expanded': expanded },
      { 'accordion-inverted': inverted },
      className
    )}
  >
    <div className='accordion-summary'>
      <h5 className='accordion-title'>{title}</h5>
      <i className='icon' />
    </div>

    <div className='accordion-content'>{children}</div>
  </div>
)

export default Accordion
