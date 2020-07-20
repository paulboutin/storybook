import React from 'react'
import Checkbox from '../../../components/base/Checkbox'

export const CheckboxStory = () => {
  const states = ['normal', 'hover', 'focus', 'disabled']

  return (
    <div className='sb:checkboxes'>
      {states.map(state => (
        <div key={state} className='sb:checkbox-wrapper'>
          <h4 className='sb:checkbox-title'>{state}</h4>
          {[false, true].map((checked, index) => (
            <Checkbox
              key={index}
              label='Checkbox'
              className={`sb:checkbox sb:checkbox-${state}`}
              checked={checked}
              disabled={state === 'disabled'}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

CheckboxStory.story = {
  name: 'Checkbox'
}
