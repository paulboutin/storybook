import React from 'react'
import classNames from 'classnames'

const ColorGroup = ({ children }) => (
  <div className='sb:color-group'>
    <div>{children}</div>
  </div>
)

const ColorName = ({ children }) => (
  <h4 className='sb:color-name'>{children}</h4>
)

const ColorBlock = ({ children, bg, text }) => (
  <div
    className={classNames('sb:color-block', `sb:color--${bg}`)}
    style={{ color: text }}
  >
    {children}
  </div>
)

export const Colors = () => (
  <div className='sb:colors'>
    <ColorGroup>
      <ColorName>Brand Green</ColorName>
      <ColorBlock bg='green' text='white'>
        Base
      </ColorBlock>
      <ColorBlock bg='green-light' text='white'>
        Light
      </ColorBlock>
      <ColorBlock bg='green-dark' text='white'>
        Dark
      </ColorBlock>
      <ColorBlock bg='green-darker' text='white'>
        Darker
      </ColorBlock>
    </ColorGroup>

    <ColorGroup>
      <ColorName>Accent Yellow</ColorName>
      <ColorBlock bg='yellow' text='black'>
        Base
      </ColorBlock>
      <ColorBlock bg='yellow-light' text='black'>
        Light
      </ColorBlock>
      <ColorBlock bg='yellow-dark' text='black'>
        Dark
      </ColorBlock>
      <ColorBlock bg='yellow-darker' text='black'>
        Darker
      </ColorBlock>
    </ColorGroup>

    <ColorGroup>
      <ColorName>Accessible Blue</ColorName>
      <ColorBlock bg='blue' text='white'>
        Base
      </ColorBlock>
      <ColorBlock bg='blue-light' text='white'>
        Light
      </ColorBlock>
      <ColorBlock bg='blue-dark' text='white'>
        Dark
      </ColorBlock>
      <ColorBlock bg='blue-darker' text='white'>
        Darker
      </ColorBlock>
    </ColorGroup>

    <ColorGroup>
      <ColorName>BW & Greyscale</ColorName>
      <ColorBlock bg='black' text='white'>
        Black
      </ColorBlock>
      <ColorBlock bg='grey' text='white'>
        90%
      </ColorBlock>
      <ColorBlock bg='grey-80' text='white'>
        80%
      </ColorBlock>
      <ColorBlock bg='grey-70' text='white'>
        70%
      </ColorBlock>
      <ColorBlock bg='grey-30' text='black'>
        30%
      </ColorBlock>
      <ColorBlock bg='grey-20' text='black'>
        20%
      </ColorBlock>
      <ColorBlock bg='grey-10' text='black'>
        10%
      </ColorBlock>
      <ColorBlock bg='grey-5' text='black'>
        5%
      </ColorBlock>
      <ColorBlock bg='white' text='black'>
        White
      </ColorBlock>
    </ColorGroup>

    <ColorGroup>
      <ColorName>Success Green</ColorName>
      <ColorBlock bg='success' text='white'>
        Base
      </ColorBlock>
      <ColorBlock bg='success-light' text='white'>
        Light
      </ColorBlock>
      <ColorBlock bg='success-dark' text='white'>
        Dark
      </ColorBlock>
      <ColorBlock bg='success-darker' text='white'>
        Darker
      </ColorBlock>
    </ColorGroup>

    <ColorGroup>
      <ColorName>Warning Yellow</ColorName>
      <ColorBlock bg='warning' text='black'>
        Base
      </ColorBlock>
      <ColorBlock bg='warning-light' text='black'>
        Light
      </ColorBlock>
      <ColorBlock bg='warning-dark' text='black'>
        Dark
      </ColorBlock>
      <ColorBlock bg='warning-darker' text='black'>
        Darker
      </ColorBlock>
    </ColorGroup>

    <ColorGroup>
      <ColorName>Error Red</ColorName>
      <ColorBlock bg='error' text='white'>
        Base
      </ColorBlock>
      <ColorBlock bg='error-light' text='white'>
        Light
      </ColorBlock>
      <ColorBlock bg='error-dark' text='white'>
        Dark
      </ColorBlock>
      <ColorBlock bg='error-darker' text='white'>
        Darker
      </ColorBlock>
    </ColorGroup>
  </div>
)

export default {
  title: 'Design System',
  parameters: {
    'in-dsm': {
      id: '602107bd8aff01f6aad6b007'
    }
  }
}
