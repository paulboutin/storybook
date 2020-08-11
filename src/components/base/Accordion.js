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
    <div>
      <h5 className='accordion-title'>{title}</h5>
      <p className='accordion-content'>{children}</p>
    </div>

    <i className='icon' />
  </div>
)

export default Accordion
