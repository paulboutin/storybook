import React from 'react'
import Radio from '../../components/base/Radio'

export const RadioStory = () => {
  const states = ['normal', 'hover', 'focus', 'disabled']

  return (
    <div className='sb:radios'>
      {states.map(state => (
        <div key={state} className='sb:radio-wrapper'>
          <h4 className='sb:radio-title'>{state}</h4>
          {[false, true].map((checked, index) => (
            <Radio
              key={index}
              label='Radio'
              name={`radio-${state}`}
              className={`sb:radio sb:radio-${state}`}
              checked={checked}
              disabled={state === 'disabled'}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

RadioStory.story = {
  name: 'Radio'
}

export default {
  title: 'Base Components',
  parameters: {
    'in-dsm': {
      id: '5f6ba2edc555198fd70671ae'
    }
  }
}
