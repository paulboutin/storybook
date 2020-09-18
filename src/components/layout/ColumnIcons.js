import React from 'react'
import classNames from 'classnames'
import Image from '../base/Image'

const Column = ({ columns, image, title, text }) => (
  <div
    className={classNames('column-icon col-xs-12', {
      'col-sm-4': [3, 5, 6].includes(columns),
      'col-sm-6': [2, 4].includes(columns),
      'col-md-3': [4].includes(columns)
    })}
  >
    <div className='column-icon-circle'>
      <Image src={image} alt='Icon description' ratio='1:1' />
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
