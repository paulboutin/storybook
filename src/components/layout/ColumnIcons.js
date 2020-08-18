import React from 'react'
import Image from '../base/Image'
import classNames from 'classnames'

const Column = ({ image, text, subtext }) => (
  <div className='column-icon'>
    <div className='column-icon-circle'>
      <Image src={image} alt='Icon description' ratio='1:1' />
    </div>

    <h6 className='column-icon-text'>{text}</h6>
    {subtext && <p className='column-icon-subtext'>{subtext}</p>}
  </div>
)

const ColumnIcons = ({ columns, inverted }) => (
  <div
    className={classNames('column-icons', `column-icons-${columns.length}`, {
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
