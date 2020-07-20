import React from 'react'
import classNames from 'classnames'

const ListElementItems = ({ items, listClass = 'fa-check-circle' }) => (
  <ul className='list-element-items'>
    {items.map((item, index) => (
      <li key={index} className={classNames('list-element-item fa', listClass)}>
        {item}
      </li>
    ))}
  </ul>
)

export default ListElementItems
