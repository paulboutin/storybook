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

const ColorBlock = ({ children, backgroundColor, textColor, className }) => (
  <div
    className={classNames(
      `bg-${backgroundColor} text-${textColor}`,
      'rounded text-center text-sm py-4 mb-4',
      className
    )}
  >
    {children}
  </div>
)

export const Colors = () => (
  <div className='flex flex-wrap lg:flex-no-wrap'>
    <ColorGroup>
      <ColorName>Brand Green</ColorName>
      <ColorBlock backgroundColor='green' textColor='white'>
        Base
      </ColorBlock>
      <ColorBlock backgroundColor='green-light' textColor='white'>
        Light
      </ColorBlock>
      <ColorBlock backgroundColor='green-dark' textColor='white'>
        Dark
      </ColorBlock>
      <ColorBlock backgroundColor='green-darker' textColor='white'>
        Darker
      </ColorBlock>
    </ColorGroup>

    <ColorGroup>
      <ColorName>Accent Yellow</ColorName>
      <ColorBlock backgroundColor='yellow' textColor='black'>
        Base
      </ColorBlock>
      <ColorBlock backgroundColor='yellow-light' textColor='black'>
        Light
      </ColorBlock>
      <ColorBlock backgroundColor='yellow-dark' textColor='black'>
        Dark
      </ColorBlock>
      <ColorBlock backgroundColor='yellow-darker' textColor='black'>
        Darker
      </ColorBlock>
    </ColorGroup>

    <ColorGroup>
      <ColorName>Accessible Blue</ColorName>
      <ColorBlock backgroundColor='blue' textColor='white'>
        Base
      </ColorBlock>
      <ColorBlock backgroundColor='blue-light' textColor='white'>
        Light
      </ColorBlock>
      <ColorBlock backgroundColor='blue-dark' textColor='white'>
        Dark
      </ColorBlock>
      <ColorBlock backgroundColor='blue-darker' textColor='white'>
        Darker
      </ColorBlock>
    </ColorGroup>

    <ColorGroup>
      <ColorName>BW & Greyscale</ColorName>
      <ColorBlock backgroundColor='black' textColor='white'>
        Black
      </ColorBlock>
      <ColorBlock backgroundColor='grey' textColor='white'>
        Grey
      </ColorBlock>
      <ColorBlock backgroundColor='grey-80' textColor='white'>
        80%
      </ColorBlock>
      <ColorBlock backgroundColor='grey-40' textColor='grey'>
        40%
      </ColorBlock>
      <ColorBlock backgroundColor='grey-30' textColor='grey'>
        30%
      </ColorBlock>
      <ColorBlock backgroundColor='grey-20' textColor='grey'>
        20%
      </ColorBlock>
      <ColorBlock backgroundColor='grey-15' textColor='grey'>
        15%
      </ColorBlock>
      <ColorBlock
        backgroundColor='white'
        textColor='grey'
        className='border border-grey-40'
      >
        White
      </ColorBlock>
    </ColorGroup>

    <ColorGroup>
      <ColorName>Success Green</ColorName>
      <ColorBlock backgroundColor='success' textColor='white'>
        Base
      </ColorBlock>
      <ColorBlock backgroundColor='success-light' textColor='white'>
        Light
      </ColorBlock>
      <ColorBlock backgroundColor='success-dark' textColor='white'>
        Dark
      </ColorBlock>
      <ColorBlock backgroundColor='success-darker' textColor='white'>
        Darker
      </ColorBlock>
    </ColorGroup>

    <ColorGroup>
      <ColorName>Warning Yellow</ColorName>
      <ColorBlock backgroundColor='warning' textColor='black'>
        Base
      </ColorBlock>
      <ColorBlock backgroundColor='warning-light' textColor='black'>
        Light
      </ColorBlock>
      <ColorBlock backgroundColor='warning-dark' textColor='black'>
        Dark
      </ColorBlock>
      <ColorBlock backgroundColor='warning-darker' textColor='black'>
        Darker
      </ColorBlock>
    </ColorGroup>

    <ColorGroup>
      <ColorName>Error Red</ColorName>
      <ColorBlock backgroundColor='error' textColor='white'>
        Base
      </ColorBlock>
      <ColorBlock backgroundColor='error-light' textColor='white'>
        Light
      </ColorBlock>
      <ColorBlock backgroundColor='error-dark' textColor='white'>
        Dark
      </ColorBlock>
      <ColorBlock backgroundColor='error-darker' textColor='white'>
        Darker
      </ColorBlock>
    </ColorGroup>
  </div>
)
