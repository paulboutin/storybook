import React from 'react'

const Callout = ({ title, text }) => (
  <div className='callout container'>
    <h1 className='callout-title'>{title}</h1>
    <p className='callout-text'>{text}</p>
  </div>
)

export default Callout
