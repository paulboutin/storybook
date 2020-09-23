import React from 'react'

export const Fonts = () => (
  <div className='sb:fonts'>
    <div className='sb:fonts-section sb:font--display'>
      <h4 className='sb:fonts-title'>BNPP Sans</h4>

      <p className='sb:font--light'>Light</p>
      <p>Normal</p>
      <p className='sb:font--bold'>Bold</p>
      <p className='sb:font--extra-bold'>Extra bold</p>

      <div className='sb:fonts-divider' />

      <p className='sb:font--light sb:font--italic'>Light italic</p>
      <p className='sb:font--italic'>Normal italic</p>
      <p className='sb:font--bold sb:font--italic'>Bold italic</p>
      <p className='sb:font--extra-bold sb:font--italic'>Extra bold italic</p>
    </div>

    <div className='sb:fonts-section'>
      <h4 className='sb:fonts-title sb:font--body'>Public Sans</h4>

      <p>Normal</p>
      <p className='sb:font--semi-bold'>Semi bold</p>
      <p className='sb:font--bold'>Bold</p>

      <div className='sb:fonts-divider' />

      <p className='sb:font--italic'>Normal italic</p>
      <p className='sb:font--semi-bold sb:font--italic'>Semi bold italic</p>
      <p className='sb:font--bold sb:font--italic'>Bold italic</p>
    </div>
  </div>
)

export default {
  title: 'Design System'
}
