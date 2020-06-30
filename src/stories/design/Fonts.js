import React from 'react'

export const Fonts = () => (
  <div className='container'>
    <div className='flex flex-wrap'>
      <div className='w-1/2 font-display'>
        <h4 className='text-grey-40'>BNPP Sans</h4>

        <p className='font-light'>Light</p>
        <p>Normal</p>
        <p className='font-bold'>Bold</p>
        <p className='font-extrabold'>Extra bold</p>

        <div className='mb-8' />

        <p className='font-light italic'>Light italic</p>
        <p className='italic'>Normal italic</p>
        <p className='font-bold italic'>Bold italic</p>
        <p className='font-extrabold italic'>Extra bold italic</p>
      </div>
      <div className='w-1/2'>
        <h4 className='text-grey-40 font-body'>Public Sans</h4>

        <p>Normal</p>
        <p className='font-semibold'>Semi bold</p>
        <p className='font-bold'>Bold</p>

        <div className='mb-8' />

        <p className='italic'>Normal italic</p>
        <p className='font-semibold italic'>Semi bold italic</p>
        <p className='font-bold italic'>Bold italic</p>
      </div>
    </div>
  </div>
)
