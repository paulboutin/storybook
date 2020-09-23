import React from 'react'
import classNames from 'classnames'

const ColumnCards = ({ heading, children, inverted }) => (
  <section
    className={classNames('column-cards container', {
      'column-cards-inverted': inverted
    })}
  >
    <h2 className='column-cards-heading'>{heading}</h2>
    <div className='row'>
      {children.map((child, index) => (
        <div key={index} className='col-md-4'>
          {child}
        </div>
      ))}
    </div>
  </section>
)

export default ColumnCards
