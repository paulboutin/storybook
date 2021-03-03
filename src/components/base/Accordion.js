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
      <p className='accordion-title text-h6 font-semi-bold'>{title}</p>
      <i className='icon' />
    </div>

    <div className='accordion-content'>{children}</div>
  </div>
)

export default Accordion
