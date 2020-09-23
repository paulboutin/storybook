import React from 'react'
import classNames from 'classnames'

const Column = ({ columns, icon, title, text }) => (
  <div
    className={classNames('column-icon col-xs-12', {
      'col-sm-4': [3, 5, 6].includes(columns),
      'col-sm-6': [2, 4].includes(columns),
      'col-md-3': [4].includes(columns)
    })}
  >
    <div className='column-icon-circle'>
      <img src={icon} alt={title} />
    </div>

    <h6 className='column-icon-title'>{title}</h6>
    {text && <p className='column-icon-text'>{text}</p>}
  </div>
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
          <Column key={index} columns={columns.length} {...column} />
        ))}
      </div>
    </div>
  </section>
)

export default ColumnIcons
