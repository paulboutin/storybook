import React from 'react'
import classNames from 'classnames'

export const Checkbox = ({ className, label, checked, disabled }) => (
  <label className={classNames('checkbox-wrapper', className)}>
    <input type='checkbox' checked={checked} disabled={disabled} />

    <span className='checkbox'>
      <span className='fa fa-check' />
    </span>

    <span className='checkbox-label'>{label}</span>
  </label>
)

export const CheckboxStory = () => {
  const states = ['normal', 'hover', 'focus', 'disabled']

  return (
    <div className='sb:checkboxes'>
      {states.map(state => {
        const normal = state === 'normal'

        return (
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
        )
      })}
    </div>
  )
}

CheckboxStory.story = {
  name: 'Checkbox'
}
