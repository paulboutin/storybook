import classNames from 'classnames'
import React from 'react'

const ColumnCards = ({ heading, children, inverted }) => (
  <div
    className={classNames('column-cards', {
      'column-cards-inverted': inverted
    })}
  >
    <div className='container'>
      <h2 className='column-cards-heading'>{heading}</h2>
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
