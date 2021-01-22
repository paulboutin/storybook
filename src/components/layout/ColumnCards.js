import React from 'react'
import classNames from 'classnames'
import Column, { columnThreeColConfig } from '../base/Column'

const ColumnCards = ({ columns, heading, children, inverted }) => (
  <section
    className={classNames('column-cards container', {
      'column-cards-inverted': inverted
    })}
  >
    <h2 className='column-cards-heading'>{heading}</h2>
    <div className='row'>
      {children.map((child, index) => (
        <Column columns={columns} key={index} configFn={columnThreeColConfig}>
          {child}
        </Column>
      ))}
    </div>
  </section>
)

export default ColumnCards
