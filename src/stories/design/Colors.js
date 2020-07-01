import React from 'react'
import classNames from 'classnames'

const ColorGroup = ({ children }) => (
  <div className='col-12 md:col-3 lg:w-full p-8'>
    <div className='m-auto max-w-xs'>{children}</div>
  </div>
)

const ColorName = ({ children }) => (
  <h4 className='text-grey text-sm font-semibold mb-4'>{children}</h4>
)

const ColorBlock = ({ children, className }) => (
  <div
    className={classNames('rounded text-center text-sm py-4 mb-4', className)}
  >
    {children}
  </div>
)

export const Colors = () => (
  <div className='flex flex-wrap lg:flex-no-wrap'>
    <ColorGroup>
      <ColorName>Brand Green</ColorName>
      <ColorBlock className='bg-green text-white'>Base</ColorBlock>
      <ColorBlock className='bg-green-light text-white'>Light</ColorBlock>
      <ColorBlock className='bg-green-dark text-white'>Dark</ColorBlock>
      <ColorBlock className='bg-green-darker text-white'>Darker</ColorBlock>
    </ColorGroup>

    <ColorGroup>
      <ColorName>Accent Yellow</ColorName>
      <ColorBlock className='bg-yellow text-black'>Base</ColorBlock>
      <ColorBlock className='bg-yellow-light text-black'>Light</ColorBlock>
      <ColorBlock className='bg-yellow-dark text-black'>Dark</ColorBlock>
      <ColorBlock className='bg-yellow-darker text-black'>Darker</ColorBlock>
    </ColorGroup>

    <ColorGroup>
      <ColorName>Accessible Blue</ColorName>
      <ColorBlock className='bg-blue text-white'>Base</ColorBlock>
      <ColorBlock className='bg-blue-light text-white'>Light</ColorBlock>
      <ColorBlock className='bg-blue-dark text-white'>Dark</ColorBlock>
      <ColorBlock className='bg-blue-darker text-white'>Darker</ColorBlock>
    </ColorGroup>

    <ColorGroup>
      <ColorName>BW & Greyscale</ColorName>
      <ColorBlock className='bg-black text-white'>Black</ColorBlock>
      <ColorBlock className='bg-grey text-white'>Grey</ColorBlock>
      <ColorBlock className='bg-grey-80 text-white'>80%</ColorBlock>
      <ColorBlock className='bg-grey-40 text-grey'>40%</ColorBlock>
      <ColorBlock className='bg-grey-30 text-grey'>30%</ColorBlock>
      <ColorBlock className='bg-grey-20 text-grey'>20%</ColorBlock>
      <ColorBlock className='bg-grey-15 text-grey'>15%</ColorBlock>
      <ColorBlock className='bg-white text-grey border border-grey-40'>
        White
      </ColorBlock>
    </ColorGroup>

    <ColorGroup>
      <ColorName>Success Green</ColorName>
      <ColorBlock className='bg-success text-white'>Base</ColorBlock>
      <ColorBlock className='bg-success-light text-white'>Light</ColorBlock>
      <ColorBlock className='bg-success-dark text-white'>Dark</ColorBlock>
      <ColorBlock className='bg-success-darker text-white'>Darker</ColorBlock>
    </ColorGroup>

    <ColorGroup>
      <ColorName>Warning Yellow</ColorName>
      <ColorBlock className='bg-warning text-black'>Base</ColorBlock>
      <ColorBlock className='bg-warning-light text-black'>Light</ColorBlock>
      <ColorBlock className='bg-warning-dark text-black'>Dark</ColorBlock>
      <ColorBlock className='bg-warning-darker text-black'>Darker</ColorBlock>
    </ColorGroup>

    <ColorGroup>
      <ColorName>Error Red</ColorName>
      <ColorBlock className='bg-error text-white'>Base</ColorBlock>
      <ColorBlock className='bg-error-light text-white'>Light</ColorBlock>
      <ColorBlock className='bg-error-dark text-white'>Dark</ColorBlock>
      <ColorBlock className='bg-error-darker text-white'>Darker</ColorBlock>
    </ColorGroup>
  </div>
)
