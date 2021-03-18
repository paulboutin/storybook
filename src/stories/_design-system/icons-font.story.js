import React from 'react'

const icons = [
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'check',
  'check-circle',
  'check-solid',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'close',
  'error',
  'facebook',
  'heart',
  'help',
  'hide',
  'history',
  'instagram',
  'linkedin',
  'location',
  'lock',
  'minus',
  'plus',
  'play',
  'quote',
  'rotate-phone',
  'search',
  'selector',
  'settings',
  'show',
  'twitter',
  'youtube',
  'long-arrow-right',
  'means-matters'
]

export const FontIcons = () => (
  <div className='sb:icons sb:font-icons'>
    {icons.map((icon, index) => (
      <div key={index} className='sb:icon'>
        <i className={`icon icon-${icon}`} />
        <p>{icon}</p>
      </div>
    ))}

    {/* Align last row to the left */}
    <div className='sb:icon-filler' />
    <div className='sb:icon-filler' />
    <div className='sb:icon-filler' />
    <div className='sb:icon-filler' />
    <div className='sb:icon-filler' />
  </div>
)

export default {
  title: 'Design System/Icons',
  parameters: {
    'in-dsm': {
      id: '5f6bb23dc555199b9e0675c6'
    }
  }
}
