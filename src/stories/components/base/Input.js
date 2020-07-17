import React from 'react'
import classNames from 'classnames'

export const Input = ({ id, error, label, ...attrs }) => (
  <div
    className={classNames(
      'input-block',
      error ? 'error' : '',
      attrs.disabled ? 'disabled' : '',
      attrs.value ? 'active' : ''
    )}
  >
    <label className='input-label' htmlFor={id}>
      {label}
      {!attrs.required && <span className='input-optional'>(Optional)</span>}
    </label>
    {attrs.type === 'password' && <span className='input-password-control' />}
    <input id={id} className='input-control' {...attrs} />
    {error && <p className='input-error'>{error}</p>}
  </div>
)

export const InputStory = () => {
  return (
    <div className='sb:input'>
      <div className='sb:input-wrapper'>
        <h3 className='sb:input-title'>Enabled</h3>
        <Input id='first-name' label='First Name' required />
      </div>
      <div className='sb:input-wrapper'>
        <h3 className='sb:input-title'>Disabled</h3>
        <Input id='last-name' label='Last Name' required disabled />
      </div>
      <div className='sb:input-wrapper'>
        <h3 className='sb:input-title'>Completed</h3>
        <Input id='address' label='Address' required value='123 Little St.' />
      </div>
      <div className='sb:input-wrapper'>
        <h3 className='sb:input-title'>Password</h3>
        <Input
          id='password'
          label='Password'
          required
          minLength='6'
          type='password'
        />
      </div>
      <div className='sb:input-wrapper'>
        <h3 className='sb:input-title'>Optional</h3>
        <Input id='email' label='Email' type='email' />
      </div>
      <div className='sb:input-wrapper'>
        <h3 className='sb:input-title'>Error</h3>
        <Input
          id='phone-2'
          label='Phone Number'
          required
          type='tel'
          error='Please enter a correct phone number'
        />
      </div>
    </div>
  )
}

InputStory.story = {
  name: 'Input'
}
