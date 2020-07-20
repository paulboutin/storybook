import React from 'react'

const Legal = ({ items }) => (
  <div className='legal'>
    <div className='legal-spacer' />
    <h2 className='legal-heading'>All the legal stuff</h2>
    <ol className='legal-list'>
      {items.map((item, index) => (
        <li className='legal-list-item' key={index}>
          {item}
        </li>
      ))}
    </ol>
  </div>
)

export default Legal
