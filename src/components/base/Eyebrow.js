import React from 'react'
import classNames from 'classnames'

const Eyebrow = ({ text, alt = false, inverted = false }) => (
  <div
    className={classNames('eyebrow', {
      'eyebrow-alt': alt,
      'eyebrow-inverted': inverted
    })}
  >
    <p className='eyebrow-text'>{text}</p>
    <div className='eyebrow-spacer' />
  </div>
)

export default Eyebrow
