import React from 'react'
import Input from '../../../components/base/Input'
import TextArea from '../../../components/base/TextArea'
import { radios } from '@storybook/addon-knobs'

export const InputStory = () => {
  const variant = radios(
    'Type',
    ['Outline', 'Underline'],
    'Outline'
  ).toLowerCase()

  return (
    <div className='sb:input'>
      <div className='sb:input-wrapper'>
        <h3 className='sb:input-title'>Enabled</h3>
        <Input variant={variant} id='first-name' label='First Name' required />
      </div>

      <div className='sb:input-wrapper'>
        <h3 className='sb:input-title'>Disabled</h3>
        <Input
          variant={variant}
          id='last-name'
          label='Last Name'
          required
          disabled
        />
      </div>

      <div className='sb:input-wrapper'>
        <h3 className='sb:input-title'>Completed</h3>
        <Input
          variant={variant}
          id='address-1'
          label='Address'
          required
          value='123 Little St.'
        />
      </div>

      <div className='sb:input-wrapper sb:input-active'>
        <h3 className='sb:input-title'>Active</h3>
        <Input variant={variant} id='address-3' label='Address' required />
      </div>

      <div className='sb:input-wrapper'>
        <h3 className='sb:input-title'>Password</h3>
        <Input
          variant={variant}
          id='password'
          label='Password'
          required
          minLength='6'
          type='password'
        />
      </div>

      <div className='sb:input-wrapper'>
        <h3 className='sb:input-title'>Optional</h3>
        <Input variant={variant} id='email' label='Email' type='email' />
      </div>

      <div className='sb:input-wrapper sb:input-error'>
        <h3 className='sb:input-title'>Help</h3>
        <Input
          variant={variant}
          id='phone-2'
          label='Phone Number'
          required
          type='tel'
          help='Please enter a correct phone number'
        />
      </div>

      <div className='sb:input-wrapper sb:input-error'>
        <h3 className='sb:input-title'>Error</h3>
        <Input
          variant={variant}
          id='phone-3'
          label='Phone Number'
          required
          type='tel'
          error='An error has occurred!'
        />
      </div>

      <div className='sb:input-wrapper'>
        <h3 className='sb:input-title'>Textarea</h3>
        <TextArea
          variant={variant}
          label='Textarea'
          maxLength={100}
          rows={5}
          help='Helper text goes here'
        />
      </div>
    </div>
  )
}

InputStory.story = {
  name: 'Input'
}
