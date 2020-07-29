import React from 'react'
import classNames from 'classnames'

const Accordion = ({ title, children, expanded, className }) => (
  <div
    className={classNames(
      'accordion',
      { 'accordion-expanded': expanded },
      className
    )}
  >
    <div>
      <h5 className='accordion-title'>{title}</h5>
      <p className='accordion-content'>{children}</p>
    </div>

    <i className='fa' />
  </div>
)

export default Accordion
