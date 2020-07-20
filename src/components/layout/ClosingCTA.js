import classNames from 'classnames'
import React from 'react'

const ClosingCTA = ({ type, heading, text, children }) => (
  <div className={classNames('closing-cta', type)}>
    <div className='container'>
      <img
        className='closing-cta-img'
        src='http://via.placeholder.com/1600/464646/464646'
        alt='Hero image'
      />
      <div className='closing-cta-content'>
        <h2 className='closing-cta-heading'>{heading}</h2>
        {type !== 'Half' && text && <p className='closing-cta-text'>{text}</p>}
        {children}
      </div>
    </div>
  </div>
)

export default ClosingCTA
