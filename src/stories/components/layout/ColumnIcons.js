import React from 'react'

const Column = ({ text, subtext }) => (
  <div className='column-icon'>
    <div className='column-icon-circle'>
      <img
        className='column-icon-img'
        src='http://via.placeholder.com/256'
        alt='Icon description'
      />
    </div>

    <h4>{text}</h4>
    {subtext && <p className='column-icon-subtext'>{subtext}</p>}
  </div>
)

export const ColumnIcons = () => (
  <div className='column-icons'>
    <div className='column-icons-section'>
      <div className='container'>
        <Column
          text='Debit card? Yes!'
          subtext='Use it anywhere that accepts a Mastercard debit card.'
        />
        <Column
          text='Overdraft protection? Yes!'
          subtext='We can all lose track of our spending. Check out our overdraft programs.'
        />
        <Column
          text='Mobile wallet? Yes!'
          subtext='Use it anywhere that accepts a Mastercard debit card.'
        />
      </div>
    </div>

    <div className='column-icons-section'>
      <div className='container'>
        <Column text='$0 monthly fee with any deposit per statement' />
        <Column text='No minimum balance required to maintain your account' />
      </div>
    </div>
  </div>
)
