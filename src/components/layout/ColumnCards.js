import classNames from 'classnames'
import React from 'react'

const ColumnCards = ({ heading, children, bgColor }) => (
  <div className={classNames('three-col', bgColor || '')}>
    <div className='container'>
      <h2 className='three-col-heading'>{heading}</h2>
      <div className='row'>
        {children.map((child, index) => (
          <div key={index} className='col-md-4'>
            {child}
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default ColumnCards
