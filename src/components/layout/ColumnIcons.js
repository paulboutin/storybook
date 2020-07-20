import React from 'react'
import classNames from 'classnames'

const Column = ({ image, text, subtext }) => (
  <div className='column-icon'>
    <div className='column-icon-circle'>
      <img src={image} alt='Icon description' className='column-icon-img' />
    </div>

    <h4 className='column-icon-text'>{text}</h4>
    {subtext && <p className='column-icon-subtext'>{subtext}</p>}
  </div>
)

const ColumnIcons = ({ columns, inverted }) => (
  <div
    className={classNames('column-icons', {
      'column-icons-inverted': inverted
    })}
  >
    <div className='container'>
      {columns.map((column, index) => (
        <Column key={index} inverted={inverted} {...column} />
      ))}
    </div>
  </div>
)

export default ColumnIcons
