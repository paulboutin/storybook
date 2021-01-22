import React from 'react'
import classNames from 'classnames'
import Column, { columnIconConfig } from '../base/Column'

const ColumnIcon = ({ columns, icon, title, text }) => (
  <Column columns={columns} configFn={columnIconConfig}>
    <div className='column-icon-circle'>
      <img src={icon} alt={title} />
    </div>

    <h6 className='column-icon-title'>{title}</h6>
    {text && <p className='column-icon-text'>{text}</p>}
  </Column>
)

const ColumnIcons = ({ columns, inverted }) => (
  <section
    className={classNames('column-icons', {
      'column-icons-inverted': inverted
    })}
  >
    <div className='container'>
      <div className='row'>
        {columns.map((column, index) => (
          <ColumnIcon key={index} columns={columns.length} {...column} />
        ))}
      </div>
    </div>
  </section>
)

export default ColumnIcons
