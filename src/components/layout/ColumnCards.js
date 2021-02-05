import React from 'react'
import classNames from 'classnames'
import Column, { columnContentConfig } from '../base/Column'

const ColumnCards = ({ columns, heading, children, inverted, className }) => (
  <section
    className={classNames(
      'column-cards container',
      {
        'column-cards-inverted': inverted
      },
      className
    )}
  >
    <h2 className='column-cards-heading'>{heading}</h2>
    <div className='row'>
      {children.map((child, index) => (
        <Column columns={columns} key={index} configFn={columnContentConfig}>
          {child}
        </Column>
      ))}
    </div>
  </section>
)

export default ColumnCards
