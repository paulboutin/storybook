import React from 'react'

export const Fonts = () => (
  <div className='ds:fonts'>
    <div className='ds:fonts-section ds:font--display'>
      <h4 className='ds:fonts-title'>BNPP Sans</h4>

      <p className='ds:font--light'>Light</p>
      <p>Normal</p>
      <p className='ds:font--bold'>Bold</p>
      <p className='ds:font--extra-bold'>Extra bold</p>

      <div className='ds:fonts-divider' />

      <p className='ds:font--light ds:font--italic'>Light italic</p>
      <p className='ds:font--italic'>Normal italic</p>
      <p className='ds:font--bold ds:font--italic'>Bold italic</p>
      <p className='ds:font--extra-bold ds:font--italic'>Extra bold italic</p>
    </div>

    <div className='ds:fonts-section'>
      <h4 className='ds:fonts-title ds:font--body'>Public Sans</h4>

      <p>Normal</p>
      <p className='ds:font--semi-bold'>Semi bold</p>
      <p className='ds:font--bold'>Bold</p>

      <div className='ds:fonts-divider' />

      <p className='ds:font--italic'>Normal italic</p>
      <p className='ds:font--semi-bold ds:font--italic'>Semi bold italic</p>
      <p className='ds:font--bold ds:font--italic'>Bold italic</p>
    </div>
  </div>
)
